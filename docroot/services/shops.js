import axios from 'axios';
import { apiURL, authKey } from 'utils/config';
const url = `${apiURL}`;

/**
 * Returns the list of shops
 * @param locale
 * @returns {AxiosPromise}
 */
export const getShops = (locale) => {
    return axios({
        url: `${url}/${locale}/api/v1/shops`,
        method: 'GET',
        headers: {
            authorization: authKey
        }
    });
};

export const getShop = (locale, shop_id) => {
    return axios({
        url: `${url}/${locale}/api/v1/shops/${shop_id}`,
        method: 'GET',
        headers: {
            authorization: authKey
        }
    });
};
