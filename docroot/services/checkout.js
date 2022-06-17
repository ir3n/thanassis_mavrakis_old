import axios from 'axios';
import { apiURL } from 'utils/config';
const url = `${apiURL}`;
import { getAuthorizationHeadersWithCookie } from './auth';
/**
 * Returns the current status of the checkout
 * @param locale
 * @returns {AxiosPromise}
 */
export const getCheckout = (locale) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout`,
        method: 'GET',
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

/**
 * Create a new checkout address
 * @param checkoutId
 * @param data
 * @param locale
 * @returns {AxiosPromise}
 */
/*
* Request body
{
  "address": {
    "langcode": "el",
    "country_code": "GR",
    "administrative_area": "NSW",
    "locality": "Athens",
    "dependent_locality": null,
    "postal_code": "11527",
    "sorting_code": null,
    "address_line1": "Demo street 25",
    "address_line2": "",
    "organization": "RocketPath",
    "given_name": "John",
    "additional_name": null,
    "family_name": "Smith"
  },
  "telephone": 6978164443
}
* */
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

/**
 * Add a shipping method
 * @param locale
 * @param checkoutId
 * @param shipping
 * @returns {AxiosPromise}
 */
export const checkoutShippingMethod = (locale, checkoutId, shipping, shippingExtraOptions) => {
    return axios({
        url: `${url}/${getRealLocale(locale)}/api/v1/checkout/${checkoutId}/shipping`,
        method: 'POST',
        data: { shipping, shipping_extra_options: shippingExtraOptions },
        headers: { ...getAuthorizationHeadersWithCookie() }
    });
};

/**
 * Add a billing address
 * @param locale
 * @param checkoutId
 * @param billing
 * @returns {AxiosPromise}
 */
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

/**
 * Add a payment method
 * @param locale
 * @param checkoutId
 * @param gateway
 * @returns {AxiosPromise}
 */
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
