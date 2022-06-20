import { useRouter } from 'next/router';
import { formatFacets, getRealLocale } from 'utils/helpers';
import { getLandingPageData as apiGetProductCategory } from 'services/landingPages';
import { useQuery } from 'react-query';

export default function useLanding(productCategoryId, initialData, page, selectedSort, selectedFilters) {
    const router = useRouter();
    const locale = getRealLocale(router.locale);
    const url = `${locale}/api/v1/landing/${productCategoryId}`;
    const queryKey = [url, locale];

    const queryFn = async () => {
        const response = await apiGetProductCategory(locale, productCategoryId, page, selectedSort, selectedFilters);

        return response.data;
    };

    const { data: productCategoryData, error, isLoading } = useQuery(queryKey, queryFn, { initialData });

    return {
        productCategoryData: productCategoryId
            ? { ...productCategoryData, facets: formatFacets(productCategoryData.facets) }
            : { ...initialData, facets: formatFacets(initialData.facets) },
        error,
        isLoading
    };
}
