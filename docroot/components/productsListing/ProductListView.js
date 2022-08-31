import { Box, useBreakpointValue, Text } from '@chakra-ui/react';
import ProductListHeader from './ProductsListHeader';
import ProductListHeaderMobile from './ProductListHeaderMobile';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import ProductListAccordion from './ProductListAccordion';
import ProductListItems from './ProductListItems';
import MetaTagsHandler from 'components/common/MetaTagsHandler';
import useProducts from 'hooks/useProducts';
import { getProductCategory } from 'services/product';
import useProductListing from 'hooks/useProductListing';
import ProductCategories from './ProductCategories';
import NumberOfProducts from './NumberOfProducts';
import SelectedFilters from './SelectedFilters';
import { useRouter } from 'next/router';
import BreadCrumb from 'components/common/BreadCrumb';

export default function ProductListView({ page, data, info, pager, facets, sort, breadcrumbs }) {
    const router = useRouter();

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
                isValidating={isValidating}
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
        md: <></>,
        lg: <></>,
        xl: <></>,
        xxl: <></>
    });

    const productCategories = useBreakpointValue({
        base: <></>,
        lg: <ProductCategories info={productCategoryData?.info} />
    });

    const filterSelected = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemoveFilter} />,
        xl: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemoveFilter} />
    });

    return (
        <>
            {productCategoryData ? (
                <>
                    {productCategoryData?.info?.metaTags && (
                        <MetaTagsHandler metaTags={productCategoryData.info.metaTags} />
                    )}

                    <Box maxW="1290px" px="20px" margin="auto">
                        <BreadCrumb breadcrumbs={productCategoryData?.breadcrumbs} />
                        <Box p={'0 0 35px 0'}>
                            <Text
                                as={'h1'}
                                textStyle={'titleSm'}
                                textAlign={'center'}
                                fontWeight="700"
                                textTransform={'uppercase'}
                            >
                                {productCategoryData?.info.name}
                            </Text>

                            <Text textStyle={'textLg'} textAlign={'center'} maxW={'480px'} m={'auto'}>
                                {
                                    'Quis porttitor bibendum nec duis at integer. Malesuada euismod semper tortor duis viverra mattis auctor amet lorem.'
                                }
                            </Text>
                        </Box>
                        <Box display={'flex'}>
                            <Box mr={'50px'} mt={'40px'} w={'20%'} display={{ base: 'none', lg: 'block' }}>
                                {filterSelected}
                                {accordion}
                            </Box>
                            <Box w={'100%'} opacity={isValidating ? 0.5 : 1} transition={'all 0.3s ease-in-out'}>
                                {!isValidating && (
                                    <ProductListItems
                                        isValidating={isValidating}
                                        productCategoryData={productCategoryData}
                                        data={productCategoryData?.data}
                                        pager={productCategoryData?.pager}
                                        loadingMore={loadingMore}
                                        handleLoadMore={handleLoadMore}
                                        sort={sort}
                                        setSelectedSort={setSelectedSort}
                                        handleSelectFilter={handleSelectFilter}
                                        handleRemoveFilter={handleRemoveFilter}
                                        selectedFilters={selectedFilters}
                                    />
                                )}
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : null}
        </>
    );
}
