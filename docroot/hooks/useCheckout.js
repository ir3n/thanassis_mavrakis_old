import { useQuery, useQueryClient } from 'react-query';
import { getCheckout } from 'services/checkout';
import { useRouter } from 'next/router';
import { getErrorMessage, getRealLocale, handleFormError } from 'utils/helpers';
import CookieHelper from 'utils/cookie';

export default function useCheckout() {
    const router = useRouter();
    const realLocale = getRealLocale(router.locale);
    const cartToken = CookieHelper.load('cartToken');
    const queryKey = ['checkout', realLocale, cartToken];
    const queryClient = useQueryClient();

    const {
        data: checkoutData,
        isLoading,
        error
    } = useQuery(
        queryKey,
        async () => {
            const checkoutResponse = await getCheckout(realLocale);
            return checkoutResponse.data;
        },
        {
            refetchOnWindowFocus: false,
            enabled: !!cartToken,
            onError: handleFormError
        }
    );

    const updateCheckoutData = (updatedData) => {
        queryClient.setQueryData(queryKey, (oldData) => updatedData);
    };

    return { checkoutData, updateCheckoutData, isLoading, error: error && getErrorMessage(error) };
}
