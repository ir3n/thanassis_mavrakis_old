import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';

const url = apiURL;

export const getFAQ = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/faq`,
        method: 'GET'
    });
};
