import btoa from 'btoa';

//export const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const baseURL = process.env.NEXT_PUBLIC_API_URL;
// export const clientId = 'c38211ea-7562-4700-80dd-7acdb4e6e5f1';
// export const clientSecret = 'abc123';

export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
export const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
// export const clientSecret = 'abc123';

export const authKey = 'Basic ' + btoa(clientId + ':' + clientSecret);
export const FACEBOOK_APP_ID = '186522703260527';

export const MINIMUM_AMOUNT_FOR_FREE_SHIPPING = 45;
