import axios from "axios";

import { apiURL, authKey } from "utils/config";
import { getRealLocale } from "utils/helpers";

export const getMenu = (locale, menuName) => {
  return axios({
    url: `${apiURL}/${getRealLocale(locale)}/api/v1/menu/${menuName}`,
    method: "GET",
    headers: {
      authorization: authKey,
    },
  });
};
