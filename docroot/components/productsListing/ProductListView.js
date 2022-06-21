import { Box, useBreakpointValue, Text } from '@chakra-ui/react';
import Container from 'components/common/Container';
import ProductListHeader from './ProductsListHeader';
import ProductListHeaderMobile from './ProductListHeaderMobile';
import ProductListSettings from './ProductsListSettings';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import ProductListAccordion from './ProductListAccordion';
import ProductListItems from './ProductListItems';
import MetaTagsHandler from 'components/common/MetaTagsHandler';
import useProducts from 'hooks/useProducts';
import { getProductCategory } from 'services/product';
import useProductListing from 'hooks/useProductListing';
import ProductCategories from './ProductCategories';
import MenuSeparator from 'components/common/Header/MenuSeparator';
import NumberOfProducts from './NumberOfProducts';

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
        setSelectedSort,
        handlePageSize
    } = useProductListing(page, data, info, pager, facets, sort, useProducts, getProductCategory);

    const header = useBreakpointValue({
        base: <ProductListHeaderMobile info={productCategoryData?.info} />,
        lg: <ProductListHeader info={productCategoryData?.info} breadcrumbs={breadcrumbs} />
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

    const numberOfProducts = useBreakpointValue({
        base: <></>,
        lg: <NumberOfProducts productCategoryData={productCategoryData} handlePageSize={handlePageSize} />
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
            <ProductListSettingsMobile
                selectedSort={selectedSort}
                facets={productCategoryData?.facets || []}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isValidating={isValidating}
            />
        ),
        xl: (
            <ProductListSettingsMobile
                selectedSort={selectedSort}
                facets={productCategoryData?.facets || []}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isValidating={isValidating}
            />
        ),
        xxl: (
            <ProductListSettings
                selectedSort={selectedSort}
                facets={productCategoryData?.facets || []}
                pager={productCategoryData?.pager}
                sort={productCategoryData?.sort}
                setSelectedSort={setSelectedSort}
                selectedFilters={selectedFilters}
                handleRemove={handleRemoveFilter}
                isValidating={isValidating}
            />
        )
    });

    const productCategories = useBreakpointValue({
        base: <></>,
        xxl: <ProductCategories info={productCategoryData?.info} />
    });

    return (
        <>
            {productCategoryData ? (
                <>
                    {productCategoryData?.info?.metaTags && (
                        <MetaTagsHandler metaTags={productCategoryData.info.metaTags} />
                    )}
                    <Box>
                        {header}

                        <Box background={'white'}>{productListSettings}</Box>

                        <MenuSeparator />
                    </Box>
                    <Container>{productCategories}</Container>
                    <Container>{numberOfProducts}</Container>

                    <Container>
                        <Box
                            w={['100%', '100%', '100%', '100%', '100%']}
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
                    </Container>
                </>
            ) : null}
        </>
    );
}
