import {
  clearAuthInfo,
  pushToQueue,
  getFirstTimeFail,
  setFirstTimeFail,
  refreshToken,
  setAuthInfo,
  // isSavedTokenExpired,
  replayQueuedRequests,
} from './auth';
import axios from 'axios';
//import store from '../store';
//import * as Sentry from '@sentry/nextjs';

//axios.defaults.withCredentials = true;

const clearAuth = () => {
  clearAuthInfo();
  //store.dispatch(clearUser());
};
const checkTokenActions = (error, resolve, reject) => {
  let objToReplay = {
    initialRequest: error.config,
    resolve: resolve,
    reject: reject,
  };
  pushToQueue(objToReplay);
  if (!getFirstTimeFail()) {
    setFirstTimeFail(true);
    refreshToken()
      .then(function (response) {
        setAuthInfo(response.data);
        setTimeout(() => {
          replayQueuedRequests();
        }, 200);
      })
      .catch((err) => {
        console.log('FAILED TO REFRESH');
        clearAuth();
      });
  }
};

axios.interceptors.request.use((config) => {
  if (!config.byPassFormatJson) {
    config.params = { ...config.params, _format: 'json' };
  }
  return config;
});
// Handle API response errors
axios.interceptors.response.use(
  (response) => {
    if (response?.config?.refreshToken) {
      refreshToken()
        .then(function (response) {
          setAuthInfo(response.data);
        })
        .catch((err) => {
          console.log('FAILED TO REFRESH');
          clearAuth();
        });
    }
    return response;
  },
  (error) => {
    return new Promise((resolve, reject) => {
      if (error?.config?.clearCredentialsOnError) {
        clearAuth();
        reject(error);
      }

      //Sentry.captureException(error);

      if (error && !error.response) {
        // Alert.error('Some error happened, please try again later');
        // } else if (error.response.status === 401) {
      } else if (
        error.response.status === 401
        //  && isSavedTokenExpired()
      ) {
        checkTokenActions(error, resolve, reject);
      } else if (error.response.status === 401) {
        clearAuth();
        if (error.config.showErrors) {
          reject(error);
        }
      } else {
        reject(error);
      }
    });
  }
);
