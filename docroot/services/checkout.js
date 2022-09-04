import axios from 'axios';
import { apiURL } from 'utils/config';
const url = `${apiURL}`;
import { getAuthorizationHeadersWithCookie } from './auth';
import { getRealLocale } from 'utils/helpers';

export const getCheckout = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout`,
        method: 'GET',
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const createCheckoutProfile = (locale, checkoutId, data) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/profile`,
        method: 'POST',
        data: { ...data },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const addCheckoutEmail = (locale, checkoutId, email) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/mail`,
        method: 'POST',
        data: { email },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};
export const addCoupon = (locale, checkoutId, code) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/coupons`,
        method: 'POST',
        data: { coupon_code: code },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};
export const deleteCoupon = (locale, checkoutId, code) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/coupons`,
        method: 'DELETE',
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const checkoutShippingMethod = (locale, checkoutId, shipping, shippingExtraOptions) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/shipping`,
        method: 'POST',
        data: { shipping, shipping_extra_options: shippingExtraOptions },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const getCountries = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/countries`,
        method: 'GET'
    });
};

export const addBillingAddress = (locale, checkoutId, billing) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/billing`,
        method: 'POST',
        data: { ...billing },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const addOrderComment = (locale, checkoutId, order_comments) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/extra`,
        method: 'POST',
        data: { order_comments },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};
export const addInvoice = (locale, checkoutId, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/invoice`,
        method: 'POST',
        data: { ...resource },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const addPaymentMethod = (locale, checkoutId, gateway) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/payment`,
        method: 'POST',
        data: { gateway },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

export const paymentComplete = (locale, checkoutId, resource) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/payment/complete`,
        method: 'POST',
        data: {
            ...resource
        },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};
