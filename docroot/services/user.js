import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';
import { getAuthorizationHeaders, getAuthorizationHeadersWithCookie } from './auth';

const url = apiURL;

export const register = (locale, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/register`,
        method: 'POST',
        data: { ...resource }
    });
};

export const personalInfo = (locale, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user`,
        method: 'POST',
        data: { type: 'personal_information', ...resource },
        headers: getAuthorizationHeaders()
    });
};

export const changePassword = (locale, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user`,
        method: 'POST',
        data: { type: 'password_change', ...resource },
        headers: getAuthorizationHeaders()
    });
};

export const getUser = (locale) => {
    return axios({
        url: `${url}/${locale}/api/v1/user/personal_information`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

export const getOrders = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/orders`,
        method: 'GET',
        headers: getAuthorizationHeadersWithCookie()
    });
};

export const getOrder = (locale, order_id) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/orders/${order_id}`,
        method: 'GET',
        headers: getAuthorizationHeadersWithCookie()
    });
};

export const getWishlist = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/wishlist`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

export const getAddresses = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/profiles`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

export const postNewAddress = (locale, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/profile`,
        method: 'POST',
        data: { ...resource, langcode: 'el' },
        headers: getAuthorizationHeaders()
    });
};

export const editAddress = (locale, resource, id) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/profile/${id}`,
        method: 'PATCH',
        data: { ...resource },
        headers: getAuthorizationHeaders()
    });
};

export const deleteAddress = (locale, id) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/profile/${id}`,
        method: 'DELETE',
        headers: getAuthorizationHeaders()
    });
};

export const requestPasswordChange = (locale, email) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/password/reset/init`,
        method: 'POST',
        data: { mail: email }
    });
};

export const resetPassword = (locale, token, password) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/password/reset`,
        method: 'POST',
        data: { token: token, password: password }
    });
};
