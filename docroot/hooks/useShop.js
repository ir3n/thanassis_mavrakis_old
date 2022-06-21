import { useRouter } from 'next/router';
import { getShop } from 'services/shops';
import { useQuery } from 'react-query';
import { getRealLocale, handleFormError } from 'utils/helpers';

export default function useCart(shop_id) {
    const router = useRouter();

    const realLocale = getRealLocale(router.locale);
    const queryKey = ['shop', realLocale, shop_id];

    const {
        data: shopData,
        error,
        isLoading
    } = useQuery(
        queryKey,
        async () => {
            const response = await getShop(realLocale, shop_id);

            return response.data;
        },
        {
            onError: handleFormError
        }
    );

    return {
        shopData,
        error,
        isLoading
    };
}
