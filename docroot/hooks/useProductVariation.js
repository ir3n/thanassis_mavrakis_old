import { useRouter } from 'next/router';
import { getVariationProduct } from 'services/product';
import { useQuery } from 'react-query';
import { getRealLocale } from 'utils/helpers';

export default function useProductVariation(product_id, variation_id) {
    const router = useRouter();

    const realLocale = getRealLocale(router.locale);
    const queryKey = ['variation', realLocale, product_id, variation_id];
    const { data, error, isLoading } = useQuery(
        queryKey,
        async () => {
            const response = await getVariationProduct(realLocale, product_id, variation_id);

            return response.data;
        },
        {
            enabled: !!(product_id && variation_id)
        }
    );

    return {
        data,
        error,
        isLoading
    };
}
