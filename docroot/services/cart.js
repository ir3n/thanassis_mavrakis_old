import axios from 'axios';
import { apiURL, authKey } from 'utils/config';
const url = `${apiURL}`;
import { getAuthorizationHeadersWithCookie } from './auth';

/**
 * Returns the list of products in your cart
 * @param locale
 * @returns {AxiosPromise}
 */
export const getCart = (locale) => {
    return axios({
        url: `${url}/${locale}/api/v1/cart`,
        method: 'GET',
        headers: {
            ...getAuthorizationHeadersWithCookie(),
            authorization: authKey
        }
    });
};

export const addToCart = (locale, items) => {
    return axios({
        url: `${url}/${locale}/api/v1/cart/add`,
        method: 'POST',
        data: items,
        headers: {
            ...getAuthorizationHeadersWithCookie(),
            authorization: authKey
        }
    });
};

export const updateQuantity = (locale, orderId, orderItemId, quantity) => {
    return axios({
        url: `${url}/${locale}/api/v1/cart/${orderId}/items/${orderItemId}`,
        method: 'PATCH',
        data: { quantity },
        headers: {
            ...getAuthorizationHeadersWithCookie(),
            authorization: authKey
        }
    });
};

export const removeFromCart = (locale, orderId, orderItemId) => {
    return axios({
        url: `${url}/${locale}/api/v1/cart/${orderId}/items/${orderItemId}`,
        method: 'DELETE',
        headers: {
            ...getAuthorizationHeadersWithCookie(),
            authorization: authKey
        }
    });
};
