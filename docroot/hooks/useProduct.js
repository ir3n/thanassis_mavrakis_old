import { useRouter } from 'next/router';
import { getProduct as apiGetProduct } from 'services/product';
import { useQuery } from 'react-query';

export default function useProduct(productId, initialData) {
    const router = useRouter();
    const locale = router.locale;

    const queryKey = [locale, productId];

    const { data: productData, error } = useQuery(
        queryKey,
        async () => {
            const response = await apiGetProduct(locale, productId);
            return response.data;
        },
        { initialData }
    );

    return {
        productData: productId ? productData : { ...initialData },
        error
    };
}
