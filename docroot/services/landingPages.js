import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';

const url = apiURL;

export const getLandingPageData = (locale, categoryId, page = 0, selectedSort, selectedFilters) => {
    let formattedFilters = {};

    if (selectedFilters) {
        for (let i in selectedFilters) {
            if (selectedFilters[i] && selectedFilters[i].length > 0) {
                formattedFilters[i] = selectedFilters[i].map((i) => i.filter).join(',');
            }
        }
    }

    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/landing/${categoryId}`,
        method: 'GET',
        params: {
            page,
            sort: selectedSort,
            ...formattedFilters
        }
        // headers: getDefaultHeaders(),
    });
};
