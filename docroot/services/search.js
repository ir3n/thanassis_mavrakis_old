import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';

const url = apiURL;

/**
 * Search
 * @param locale
 * @param text
 * @param page
 * @returns {AxiosPromise}
 */

export const search = (locale, text, page = 0, selectedSort, selectedFilters) => {
    let formattedFilters = {};

    if (selectedFilters) {
        for (let i in selectedFilters) {
            if (selectedFilters[i] && selectedFilters[i].length > 0) {
                formattedFilters[i] = selectedFilters[i].map((i) => i.filter).join(',');
            }
        }
    }
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/search`,
        method: 'GET',
        params: {
            query: text,
            page,
            sort: selectedSort,
            ...formattedFilters
        }
    });
};
