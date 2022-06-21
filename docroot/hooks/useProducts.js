import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getProductCategory as apiGetProductCategory } from 'services/product';
import { getRealLocale } from 'utils/helpers';
import { formatFacets } from 'utils/helpers';

export const useProducts = (productCategoryId, initialData, page, selectedSort, selectedFilters, pageSize) => {
    const router = useRouter();
    const locale = router.locale;

    const queryKey = [locale, productCategoryId, page, selectedSort, selectedFilters];

    const queryFn = async () => {
        const response = await apiGetProductCategory(
            getRealLocale(locale),
            productCategoryId,
            page,
            selectedSort,
            selectedFilters,
            pageSize
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
        refetchOnMount: true
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
