import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getProductCategory as apiGetProductCategory } from 'services/product';
import { getRealLocale } from 'utils/helpers';
import { formatFacets } from 'utils/helpers';

export const useProducts = (productCategoryId, initialData, page, selectedSort, selectedFilters) => {
    const router = useRouter();
    const locale = router.locale;

    const url = `{${locale}/api/v1/taxonomy/${productCategoryId}`;
    const queryKey = [url, locale, productCategoryId, page];

    const queryFn = async () => {
        const response = await apiGetProductCategory(
            getRealLocale(locale),
            productCategoryId,
            page,
            selectedSort,
            selectedFilters
        );

        return response.data;
    };

    const {
        data: productCategoryData,
        error,
        isLoading,
        isValidating
    } = useQuery(queryKey, queryFn, {
        initialData,
        revalidateOnMount: true
    });

    return {
        productCategoryData: productCategoryId
            ? { ...productCategoryData, facets: formatFacets(productCategoryData.facets) }
            : { ...initialData, facets: formatFacets(initialData.facets) },
        error,
        isLoading,
        isValidating
    };
};

export default useProducts;
