import { Box, useBreakpointValue } from '@chakra-ui/react';

import useLanding from 'hooks/useLanding';
import useProductListing from 'hooks/useProductListing';
import { getLandingPageData } from 'services/landingPages';
import ProductListHeader from './ProductsListHeader';
import ProductListSettings from './ProductsListSettings';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import ProductListAccordion from './ProductListAccordion';
import ProductListItems from './ProductListItems';
import MetaTagsHandler from 'components/common/MetaTagsHandler';

export default function LandingListView({ page, data, info, pager, facets, sort, breadcrumbs }) {
    const {
        handleLoadMore,
        handleRemoveFilter,
        handleSelectFilter,
        selectedSort,
        selectedFilters,
        loadingMore,
        productCategoryData,
        isValidating,
        setSelectedSort
    } = useProductListing(page, data, info, pager, facets, sort, useLanding, getLandingPageData);

    const header = useBreakpointValue({
        lg: <ProductListHeader info={productCategoryData?.info} breadcrumbs={breadcrumbs} />,
        xl: <ProductListHeader info={productCategoryData?.info} breadcrumbs={breadcrumbs} />
    });

    const accordion = useBreakpointValue({
        md: <></>,
        lg: (
            <ProductListAccordion
                isValidating={isValidating}
                facets={productCategoryData?.facets || []}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
            />
        ),
        xl: (
            <ProductListAccordion
                isValidating={isValidating}
                facets={productCategoryData?.facets || []}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
            />
        )
    });

    const productListSettings = useBreakpointValue({
        md: (
            <ProductListSettingsMobile
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedSort={selectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile={true}
            />
        ),
        lg: (
            <ProductListSettings
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedSort={selectedSort}
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
                    {productListSettings}
                    <Box maxW="1290px" px="20px" margin="auto">
                        <Box as="div" display="flex" flexDir="row" mb={'50px'}>
                            <Box w={['0', '0', '0%', '30%', '30%']}>{accordion}</Box>
                            <Box
                                w={['100%', '100%', '100%', '70%', '70%']}
                                opacity={isValidating ? 0.5 : 1}
                                transition={'all 0.3s ease-in-out'}
                            >
                                <ProductListItems
                                    data={productCategoryData?.data}
                                    pager={productCategoryData?.pager}
                                    loadingMore={loadingMore}
                                    handleLoadMore={handleLoadMore}
                                    selectedFilters={selectedFilters}
                                    handleRemove={handleRemoveFilter}
                                />
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : null}
        </>
    );
}
