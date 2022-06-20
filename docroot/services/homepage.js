import axios from 'axios';
import { apiURL } from '../utils/config';

/**
 * Returns the homepage Data
 * @returns {AxiosPromise}
 */

export const getHomePage = (locale) => {
    const url = `${apiURL}/${locale}/api/v1/homepage`;
    return axios({
        url: url,
        method: 'GET'
    });
};
