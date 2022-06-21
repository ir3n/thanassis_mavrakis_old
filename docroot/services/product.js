import axios from 'axios';
import { apiURL, authKey } from 'utils/config';

const url = apiURL;

/**
 * Returns product listing, search facets and info for a product category
 * @returns {AxiosPromise}
 */
export const getProductCategory = (locale, productCategoryId, page = 0, selectedSort, selectedFilters, pageSize) => {
    let formattedFilters = {};

    if (selectedFilters) {
        for (let i in selectedFilters) {
            if (selectedFilters[i] && selectedFilters[i].length > 0) {
                formattedFilters[i] = selectedFilters[i].map((i) => i.filter).join(',');
            }
        }
    }

    return axios({
        url: `${url}/${locale}/api/v1/taxonomy/${productCategoryId}`,
        method: 'GET',
        params: {
            page,
            sort: selectedSort?.value,
            pageSize,
            ...formattedFilters
        },
        headers: {
            authorization: authKey
        }
    });
};

/**
 * Returns product details
 * @param locale
 * @param productId
 * @returns {AxiosPromise}
 */
export const getProduct = (locale, productId) => {
    return axios({
        url: `${url}/${locale}/api/v1/products/${productId}`,
        method: 'GET'
    });
};
