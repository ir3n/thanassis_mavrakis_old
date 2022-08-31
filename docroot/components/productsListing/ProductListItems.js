import {
    Box,
    Button,
    Grid,
    Text,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBreakpointValue
} from '@chakra-ui/react';
import ProductTeaser from 'components/common/ProductTeaser';
import useTranslation from 'next-translate/useTranslation';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ProductListSettingsMobile from './ProductListSettingsMobile';
import Pagination from 'components/common/Pagination';

const ProductListItems = ({
    productCategoryData,
    data,
    pager,
    isValidating,
    handleLoadMore,
    selectedFilters,
    sort,
    setSelectedSort,
    selectedSort,
    handleRemoveFilter,
    handleSelectFilter,
    filterSelected
}) => {
    const { t } = useTranslation('common');

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
                filterSelected={filterSelected}
                handleRemoveFilter={handleRemoveFilter}
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
                filterSelected={filterSelected}
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

    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box display={{ base: 'none', lg: 'block' }}>
                    <Text as="p" fontSize="16px">
                        <Text as="span" fontWeight="bold">
                            {isValidating ? '' : pager?.totalResults}
                        </Text>{' '}
                        {'products'}
                    </Text>
                </Box>

                {productListSettings}

                <Box className={'choose_btn'}>
                    {sort ? (
                        <Menu>
                            <MenuButton
                                height="40px"
                                background="transparent"
                                color="black"
                                fontWeight="normal"
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                                _hover={{ bg: 'transparent' }}
                            >
                                {'Short by: '}
                                {selectedSort ? selectedSort.label : ''}
                            </MenuButton>
                            <MenuList zIndex={'1000'}>
                                {sort?.options?.map((i) => {
                                    return (
                                        <MenuItem
                                            key={i.value}
                                            onClick={() => {
                                                setSelectedSort(i);
                                            }}
                                        >
                                            {i.label}
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                    ) : null}
                </Box>
            </Box>
            <Box as="div" mt="16px">
                <Grid
                    templateColumns={{ base: '1', xs: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4,1fr)' }}
                    gap={{ base: '10px', sm: '20px' }}
                >
                    {data?.map(
                        (
                            {
                                teaser_image,
                                url,
                                brand,
                                title,
                                price,
                                product_id,
                                mastersku,
                                list_price,
                                max_discount_percentage,
                                web_only,
                                teaser_variation_options
                            },
                            index
                        ) => (
                            <GridItem key={`Products-${index}`} id={index} pos="relative" overflow="hidden" h="100%">
                                <ProductTeaser
                                    key={product_id}
                                    title={title}
                                    product_id={product_id}
                                    image={teaser_image}
                                    price={price}
                                    list_price={list_price}
                                    brand={brand}
                                    url={url}
                                    web_only={web_only}
                                    mastersku={mastersku}
                                    discount_percentage={max_discount_percentage}
                                    variation_options={teaser_variation_options}
                                />
                            </GridItem>
                        )
                    )}
                </Grid>

                <Box as="div" textAlign={'center'} my={'50px'}>
                    <Pagination {...pager} onChange={handleLoadMore} />
                </Box>
            </Box>
        </Box>
    );
};

export default ProductListItems;
