import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';
import { getAuthorizationHeaders } from './auth';

const url = apiURL;

/**
 * Register new user
 * @param locale
 * @param resource
 * @returns {AxiosPromise}
 */
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

/**
 * Change password
 * @param locale
 * @param password
 * @returns {AxiosPromise}
 */
export const changePassword = (locale, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user`,
        method: 'POST',
        data: { type: 'password_change', ...resource },
        headers: getAuthorizationHeaders()
    });
};

/**
 * Get user info
 * @param locale
 * @returns {AxiosPromise}
 */
export const getUser = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/personal_information`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

/**
 *
 * @param locale
 * @returns {AxiosPromise}
 */
export const getOrders = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/orders`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

/**
 * Get wishlist
 * @param locale
 * @returns {AxiosPromise}
 */
export const getWishlist = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/wishlist`,
        method: 'GET',
        headers: getAuthorizationHeaders()
    });
};

/**
 * Get addresses
 * @param locale
 * @returns {AxiosPromise}
 */
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
        data: { ...resource, country_code: 'GR', langcode: 'el' },
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

/**
 * Request Password Change
 * @param locale
 * @returns {AxiosPromise}
 */

export const requestPasswordChange = (locale, email) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/password/reset`,
        method: 'POST',
        data: { mail: email }
    });
};

export const resetPassword = (locale, token, password) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/user/password/reset?_format=json`,
        method: 'POST',
        data: { token: token, password: password }
    });
};
