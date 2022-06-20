import { baseURL, authKey, clientId, clientSecret } from 'utils/config';
import CookieHelper from 'utils/cookie';
import axios from 'axios';
import { addSeconds, compareAsc } from 'date-fns';
const loginUrl = baseURL + '/oauth/token';
const logoutUrl = baseURL + '/oauth/access-token';
let firstTimeFail = false;
let requestsQueue = [];
export let defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: authKey
};
export let loginHeaders = {
    Accept: 'application/json',
    'Content-Type': undefined,
    Authorization: authKey
};
export const isSavedTokenExpired = (authInfo = JSON.parse(CookieHelper.load('auth'))) => {
    let hasExpired = false;
    let now = new Date();
    if (authInfo && authInfo.expiresOn && compareAsc(now, new Date(authInfo.expiresOn)) === 1) {
        console.log('token has expired. i will refresh it');
        hasExpired = true;
    }
    return hasExpired;
};

export const login = (username, password) => {
    let data = new FormData();
    let cartHeaders = { 'Commerce-Cart-Token': CookieHelper.load('cartToken') };
    data.append('username', username);
    data.append('password', password);
    data.append('grant_type', 'password');
    //data.append("scope", "write");
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    return axios({
        url: loginUrl,
        method: 'POST',
        data: data,
        headers: { ...loginHeaders, ...cartHeaders },
        clearCredentialsOnError: true
    });
};

export const loginWithFB = (facebook_access_token, facebook_user_id, facebook_token_expires_in) => {
    let data = new FormData();
    let cartHeaders = { 'Commerce-Cart-Token': CookieHelper.load('cartToken') };
    data.append('facebook_access_token', facebook_access_token);
    data.append('facebook_user_id', facebook_user_id);
    data.append('facebook_token_expires_in', facebook_token_expires_in);
    data.append('grant_type', 'facebook_login_grant');
    //data.append("scope", "write");
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    return axios({
        url: loginUrl,
        method: 'POST',
        data: data,

        headers: { ...loginHeaders, ...cartHeaders },
        clearCredentialsOnError: true
    });
};
export const refreshToken = (authInfo = CookieHelper.load('auth')) => {
    let data = new FormData();
    if (authInfo) {
        data.append('grant_type', 'refresh_token');
        data.append('refresh_token', JSON.parse(authInfo).refresh_token);
        data.append('client_id', clientId);
        data.append('client_secret', clientSecret);
    } else {
        clearAuthInfo();
        //store.dispatch(clearUser());
    }
    return axios({
        url: loginUrl,
        method: 'POST',
        data: data,
        clearCredentialsOnError: true,
        headers: defaultHeaders
    });
};

export const logout = () => {
    return axios({
        url: logoutUrl,
        method: 'DELETE',
        headers: getAuthorizationHeaders()
    });
};

export const setAuthInfo = (authObj) => {
    authObj.isLoggedIn = true;
    authObj.expiresOn = addSeconds(new Date(), authObj.expires_in);
    CookieHelper.save('auth', JSON.stringify(authObj));
};
export const clearAuthInfo = () => {
    CookieHelper.remove('auth');
};
export const getAuthorizationHeaders = (authInfo = CookieHelper.load('auth')) => {
    let authHeaderValue = null;
    if (authInfo) {
        authHeaderValue = JSON.parse(authInfo).access_token;
    }
    return Object.assign({}, getDefaultHeaders(), {
        Authorization: 'Bearer ' + authHeaderValue
    });
};
export const getDefaultHeaders = () => {
    return defaultHeaders;
};
export const pushToQueue = (promise) => {
    requestsQueue.push(promise);
};
export const clearQueue = () => {
    requestsQueue = [];
};
export const replayQueuedRequests = () => {
    let req = requestsQueue;
    for (let i = 0; i < req.length; i++) {
        req[i].initialRequest.headers = getAuthorizationHeaders();
        // Replay request
        axios(req[i].initialRequest)
            .then((response) => {
                req[i].resolve(response);
            })
            .catch((response) => {
                req[i].reject(response);
            });
    }
    clearQueue();
    setFirstTimeFail(false);
};
export const getFirstTimeFail = () => {
    return firstTimeFail;
};
export const setFirstTimeFail = (value) => {
    firstTimeFail = value;
};

export const getAuthorizationHeadersWithCookie = () => {
    let headers = { 'Commerce-Cart-Token': CookieHelper.load('cartToken') };

    if (CookieHelper.load('auth')) {
        headers = { ...headers, ...getAuthorizationHeaders() };
    }

    return headers;
};
