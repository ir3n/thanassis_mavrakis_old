import { useRouter } from 'next/router';
import { getShops } from 'services/shops';
import { useQuery } from 'react-query';
import { getRealLocale, handleFormError } from 'utils/helpers';

export default function useCart() {
    const router = useRouter();

    const realLocale = getRealLocale(router.locale);
    const queryKey = ['shops', realLocale];

    const {
        data: allShopsData,
        error,
        isLoading
    } = useQuery(
        queryKey,
        async () => {
            const response = await getShops(realLocale);

            return response.data;
        },
        {
            onError: handleFormError
        }
    );

    return {
        allShopsData,
        error,
        isLoading
    };
}
