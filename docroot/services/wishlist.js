import axios from 'axios';
import { apiURL } from 'utils/config';
import { getAuthorizationHeadersWithCookie } from './auth';

const url = `${apiURL}`;

/**
 * Returns the WishList
 * @param locale
 * @returns {AxiosPromise}
 */

export const getWishlist = (locale) => {
    return axios({
        url: `${url}/${locale}/api/v1/wishlist`,
        method: 'GET',
        headers: {
            ...getAuthorizationHeadersWithCookie()
        }
    });
};

export const addToWishlist = (locale, items) => {
    return axios({
        url: `${url}/${locale}/api/v1/wishlist`,
        method: 'POST',
        data: items,
        headers: {
            ...getAuthorizationHeadersWithCookie()
        }
    });
};
