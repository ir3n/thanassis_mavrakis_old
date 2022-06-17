import { useRouter } from 'next/router';
import { getCart, addToCart, updateQuantity, removeFromCart } from 'services/cart';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getRealLocale, handleFormError, getErrorMessage } from 'utils/helpers';

import CookieHelper from 'utils/cookie';

export default function useCart() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const cartToken = CookieHelper.load('cartToken');
    const realLocale = getRealLocale(router.locale);
    const queryKey = ['cart', realLocale, cartToken];

    const {
        data: cartData,
        error,
        isLoading
    } = useQuery(
        queryKey,
        async () => {
            const response = await getCart(realLocale);

            return response.data;
        },
        {
            onError: handleFormError,
            revalidateOnMount: true,
            enabled: !!cartToken
        }
    );

    const { mutateAsync: create } = useMutation(
        queryKey,
        async (cartItems) => {
            const { data } = await addToCart(realLocale, cartItems);
            return data;
        },
        {
            onSuccess: (response) => {
                queryClient.invalidateQueries(queryKey);
            },
            onError: handleFormError
        }
    );

    const {
        mutateAsync: update,
        isLoading: updateLoading,
        error: updateError
    } = useMutation(
        queryKey,
        async ({ order_id, order_item_id, quantity }) => {
            return updateQuantity(realLocale, order_id, order_item_id, quantity);
        },
        {
            mutationKey: queryKey,
            onSuccess: (response, variables, context) => {
                queryClient.setQueryData(queryKey, response.data);
            },
            onError: handleFormError
        }
    );

    const {
        mutateAsync: remove,
        isLoading: removeLoading,
        error: removeError
    } = useMutation(
        queryKey,
        async ({ order_id, order_item_id }) => {
            const response = await removeFromCart(realLocale, order_id, order_item_id);

            return response.data;
        },
        {
            mutationKey: queryKey,
            onSuccess: (response, variables, context) => {
                queryClient.setQueryData(queryKey, response);
            },
            onError: handleFormError
        }
    );

    return {
        cartData,
        create,
        update,
        updateLoading,
        updateError: updateError && getErrorMessage(updateError),
        remove,
        removeLoading,
        removeError: removeError && getErrorMessage(removeError),
        error,
        isLoading
    };
}
