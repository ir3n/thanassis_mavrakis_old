import { Box, useBreakpointValue, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Container from 'components/common/Container';
import ProductListHeader from './ProductsListHeader';
import ProductListSettings from './ProductsListSettings';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import ProductListAccordion from './ProductListAccordion';
import ProductListItems from './ProductListItems';
import MetaTagsHandler from 'components/common/MetaTagsHandler';
import useSearch from 'hooks/useSearch';
import { useEffect, useState } from 'react';
import { createFiltersFromQuery, createFiltersParamsUrl } from 'utils/helpers';
import { getRealLocale } from 'utils/helpers';
import { search } from 'services/search';
import useTranslation from 'next-translate/useTranslation';
import Tracking from '../../utils/tracking';
import useUser from '../../hooks/useUser';

export default function SearchProductListView({ page, data, info, pager, facets, sort, breadcrumbs }) {
    const { t } = useTranslation('common');

    const router = useRouter();
    const toast = useToast();
    const { isLoggedIn } = useUser();
    const [selectedSort, setSelectedSort] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const selectedFiltersPath = createFiltersParamsUrl(selectedFilters);

        //shallow routing
        if (selectedFiltersPath && selectedFiltersPath.length > 0) {
            router.push(`${page.path}/${page.term}/${selectedFiltersPath}`, undefined, {
                shallow: true
            });
        } else {
            router.push(`${page.path}/${page.term}`, undefined, {
                shallow: true
            });
        }
        Tracking.pageView('Category', isLoggedIn());
    }, [selectedFilters]);

    useEffect(() => {
        handleLoadData();
    }, [selectedFilters, selectedSort, page.id]);

    const { productCategoryData, url, mutate } = useSearch(page.term, { data, info, pager, facets, sort }, 0);

    useEffect(() => {
        const firstFiveOrLessItems = productCategoryData.data.slice(0, 5);
        productCategoryData?.data?.length > 0 &&
            Tracking.viewSearchResults(firstFiveOrLessItems, productCategoryData.data);
    }, [productCategoryData.data.length]);

    useEffect(() => {
        if (page.query) {
            setSelectedFilters(createFiltersFromQuery(page.query, productCategoryData.facets));
        } else {
            setSelectedFilters([]);
        }
    }, [page.path]);

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

    const handleLoadData = () => {
        setLoading(true);

        search(getRealLocale(router.locale), page.term, 0, selectedSort?.value, selectedFilters)
            .then((res) => {
                mutate(
                    {
                        ...productCategoryData,
                        data: res.data.data,
                        pager: res.data.pager
                    },
                    false
                );
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: t('error'),
                    description: getErrorMessage(err),
                    position: 'top',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleLoadMore = () => {
        setLoadingMore(true);
        search(
            getRealLocale(router.locale),
            page.term,
            productCategoryData.pager.currentpage + 1,
            selectedSort?.value,
            selectedFilters
        )
            .then((res) => {
                mutate(
                    {
                        ...productCategoryData,
                        data: productCategoryData.data.concat(res.data.data),
                        pager: res.data.pager
                    },
                    false
                );
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: t('error'),
                    description: getErrorMessage(err),
                    position: 'top',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
            })
            .finally(() => {
                setLoadingMore(false);
            });
    };

    const header = useBreakpointValue({
        lg: (
            <ProductListHeader
                info={productCategoryData?.info}
                breadcrumbs={breadcrumbs}
                isSearchResults
                term={page.term}
            />
        ),
        xl: (
            <ProductListHeader
                info={productCategoryData?.info}
                breadcrumbs={breadcrumbs}
                isSearchResults
                term={page.term}
            />
        )
    });

    const accordion = useBreakpointValue({
        base: <Box />,
        sm: <></>,
        md: <></>,
        lg: (
            <ProductListAccordion
                facets={productCategoryData?.facets || []}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
            />
        ),
        xl: (
            <ProductListAccordion
                facets={productCategoryData?.facets || []}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
            />
        )
    });

    const productListSettings = useBreakpointValue({
        base: (
            <ProductListSettingsMobile
                isSearchResults
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile={true}
            />
        ),
        sm: (
            <ProductListSettingsMobile
                isSearchResults
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile={true}
            />
        ),
        md: (
            <ProductListSettingsMobile
                isSearchResults
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile={true}
            />
        ),
        lg: (
            <ProductListSettings
                isSearchResults
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
            />
        ),
        xl: (
            <ProductListSettings
                isSearchResults
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
            />
        )
    });

    return (
        <>
            {productCategoryData ? (
                <>
                    {productCategoryData?.info?.metaTags && (
                        <MetaTagsHandler metaTags={productCategoryData.info.metaTags} />
                    )}

                    {header}
                    <Container>
                        {productListSettings}
                        <Box as="div" display="flex" flexDir="row" mb={'50px'}>
                            <Box w={['0', '0', '0%', '30%', '30%']}>{accordion}</Box>
                            <Box
                                w={['100%', '100%', '100%', '70%', '70%']}
                                opacity={loading ? 0.5 : 1}
                                transition={'all 0.3s ease-in-out'}
                            >
                                <ProductListItems
                                    selectedFilters={selectedFilters}
                                    data={productCategoryData?.data}
                                    pager={productCategoryData?.pager}
                                    loadingMore={loadingMore}
                                    handleLoadMore={handleLoadMore}
                                    handleRemove={handleRemoveFilter}
                                />
                            </Box>
                        </Box>
                    </Container>
                </>
            ) : null}
        </>
    );
}
