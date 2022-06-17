import { useQuery } from 'react-query';
import { getCheckout } from 'services/checkout';
import { useRouter } from 'next/router';
import { getRealLocale, handleFormError } from 'utils/helpers';
import CookieHelper from 'utils/cookie';

export default function useCheckout() {
    const router = useRouter();
    const realLocale = getRealLocale(router.locale);
    const cartToken = CookieHelper.load('cartToken');
    const queryKey = ['checkout', realLocale, cartToken];

    const fetcher = async () => {
        const checkoutResponse = await getCheckout(realLocale);
        return checkoutResponse.data;
    };

    const {
        data: checkoutData,
        isLoading,
        error
    } = useQuery(queryKey, fetcher, {
        refetchOnWindowFocus: false,
        enabled: !!cartToken,
        onError: handleFormError
    });

    return { checkoutData, isLoading, error };
}
