import { Box, useBreakpointValue } from '@chakra-ui/react';

import Container from 'components/common/Container';
import ProductListHeader from './ProductsListHeader';
import ProductListSettings from './ProductsListSettings';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import ProductListAccordion from './ProductListAccordion';
import ProductListItems from './ProductListItems';
import MetaTagsHandler from 'components/common/MetaTagsHandler';
import useProducts from 'hooks/useProducts';
import { getProductCategory } from 'services/product';
import useProductListing from 'hooks/useProductListing';

export default function ProductListView({ page, data, info, pager, facets, sort, breadcrumbs }) {
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
    } = useProductListing(page, data, info, pager, facets, sort, useProducts, getProductCategory);

    const header = useBreakpointValue({
        lg: <ProductListHeader info={productCategoryData?.info} breadcrumbs={breadcrumbs} />,
        xl: <ProductListHeader info={productCategoryData?.info} breadcrumbs={breadcrumbs} />
    });

    const accordion = useBreakpointValue({
        base: <></>,
        sm: <></>,
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
        base: (
            <ProductListSettingsMobile
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedSort={selectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile
            />
        ),
        sm: (
            <ProductListSettingsMobile
                facets={productCategoryData?.facets || []}
                handleSelectFilter={handleSelectFilter}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedSort={selectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isMobile
                isValidating={isValidating}
            />
        ),
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
                isMobile
                isValidating={isValidating}
            />
        ),
        lg: (
            <ProductListSettings
                selectedSort={selectedSort}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isValidating={isValidating}
            />
        ),
        xl: (
            <ProductListSettings
                selectedSort={selectedSort}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isValidating={isValidating}
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
                            <Box w={['0', '0', '0%', '30%', '30%']} paddingRight={['0', '0', '0', '25px', '25px']}>
                                {accordion}
                            </Box>
                            <Box
                                w={['100%', '100%', '100%', '70%', '70%']}
                                opacity={isValidating ? 0.5 : 1}
                                transition={'all 0.3s ease-in-out'}
                            >
                                {!isValidating && (
                                    <ProductListItems
                                        isValidating={isValidating}
                                        data={productCategoryData?.data}
                                        pager={productCategoryData?.pager}
                                        loadingMore={loadingMore}
                                        handleLoadMore={handleLoadMore}
                                        selectedFilters={selectedFilters}
                                        handleRemove={handleRemoveFilter}
                                    />
                                )}
                            </Box>
                        </Box>
                    </Container>
                </>
            ) : null}
        </>
    );
}
