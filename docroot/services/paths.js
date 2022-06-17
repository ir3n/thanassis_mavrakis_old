import axios from 'axios';
import { apiURL } from 'utils/config';
import { getRealLocale } from 'utils/helpers';

const url = apiURL;

export const getAllPaths = (locales) => {
    const allLocalesCalls = locales.map((locale) => {
        return axios({
            url: `${url}/${locale}/api/v1/paths`,
            method: 'GET'
        });
    });

    return Promise.all(allLocalesCalls).then((resArr) => {
        return { data: [...resArr.map((i) => i.data)] };
    });
};

export const getPathProps = (locale, path) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/router`,
        method: 'GET',
        params: {
            path: path
        }
    });
};
