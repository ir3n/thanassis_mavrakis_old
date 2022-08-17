import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';

const url = apiURL;

export const getGlobalSections = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/global_sections`,
        method: 'GET'
    });
};
