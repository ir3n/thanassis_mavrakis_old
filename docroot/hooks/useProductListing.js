import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import useUser from 'hooks/useUser';
import { createFiltersFromQuery, createFiltersParamsUrl } from 'utils/helpers';
import Tracking from 'utils/tracking';

export default function useProductListing(page, data, info, pager, facets, sort, dataHook, apiCallToFetchData) {
    const { t } = useTranslation('common');
    const router = useRouter();
    const toast = useToast();
    const { isLoggedIn } = useUser();
    const [selectedSort, setSelectedSort] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(pager?.numberOfElements || 24);
    console.log(selectedSort, 'selectedSort');

    useEffect(() => {
        const selectedFiltersPath = createFiltersParamsUrl(selectedFilters);

        //shallow routing
        if (selectedFiltersPath && selectedFiltersPath.length > 0) {
            router.push(`${page.path}/${selectedFiltersPath}`, undefined, {
                shallow: true
            });
        } else {
            router.push(`${page.path}`, undefined, {
                shallow: true
            });
        }
        Tracking.pageView('Category', isLoggedIn());
    }, [selectedFilters]);

    const { productCategoryData, isValidating } = dataHook(
        page.id,
        { data, info, pager, facets, selectedSort },
        pageNumber,
        selectedSort,
        selectedFilters,
        pageSize
    );

    useEffect(() => {
        if (page.query) {
            setSelectedFilters(createFiltersFromQuery(page.query, productCategoryData.facets));
            setSelectedSort(null);
        } else {
            setSelectedFilters(null);
            setSelectedSort(null);
        }
        //setSelectedFilters(createFiltersFromUrl(router.asPath));
    }, [page.id]);

    useEffect(() => {
        const firstFiveOrLessItems = productCategoryData.data.slice(0, 5);
        productCategoryData?.data?.length > 0 && Tracking.viewItemList(firstFiveOrLessItems, productCategoryData?.data);
    }, [productCategoryData.data.length]);

    const handleSelectFilter = (facet, filter) => {
        let newFilters = { ...selectedFilters };
        if (newFilters[facet]) {
            //if it exists, remove it
            if (newFilters[facet].find((i) => i.filter_transliterated === filter.filter_transliterated)) {
                newFilters[facet] = newFilters[facet].filter(
                    (i) => i.filter_transliterated !== filter.filter_transliterated
                );
            } else {
                newFilters[facet].push(filter);
            }
        } else {
            newFilters[facet] = [filter];
        }

        setSelectedFilters(newFilters);
    };

    const handleRemoveFilter = (filter) => {
        let newFilters = { ...selectedFilters };
        let facet = filter.facet;
        newFilters[facet] = newFilters[facet].filter((i) => i.filter_transliterated !== filter.filter_transliterated);

        if (newFilters[facet].length === 0) {
            delete newFilters[facet];
        }

        setSelectedFilters(newFilters);
    };

    const handleLoadMore = async (newPageNumber = productCategoryData.pager.currentpage + 1) => {
        setLoadingMore(true);

        //localStorage.setItem(`page_${page.id}`, newPageNumber);

        setPageNumber(newPageNumber);
        try {
            apiCallToFetchData(router.locale, page.id, newPageNumber, selectedSort, selectedFilters);
        } catch (err) {
            console.log(err);
            toast({
                title: t('error'),
                description: t('errorLoadingMoreProducts'),
                position: 'bottom-right',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoadingMore(false);
        }
    };
    const handlePageSize = async (newPageSize) => {
        setLoadingMore(true);

        setPageSize(newPageSize);
        try {
            apiCallToFetchData(router.locale, page.id, pageNumber, selectedSort, selectedFilters, newPageSize);
        } catch (err) {
            console.log(err);
            toast({
                title: t('error'),
                description: t('errorLoadingMoreProducts'),
                position: 'bottom-right',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoadingMore(false);
        }
    };

    return {
        handleLoadMore,
        handleRemoveFilter,
        handleSelectFilter,
        selectedSort,
        selectedFilters,
        loadingMore,
        productCategoryData,
        isValidating,
        setSelectedSort,
        setSelectedFilters,
        handlePageSize
    };
}
