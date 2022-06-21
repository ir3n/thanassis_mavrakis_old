import { Box, Button, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import FeaturedProduct from 'components/common/FeaturedProduct';
import useTranslation from 'next-translate/useTranslation';
// import { getFormattedFilters } from 'utils/helpers';
// import Filter from 'components/common/Filter';
import SelectedFilters from 'components/productsListing/SelectedFilters';

import Pagination from 'components/common/Pagination';

const ProductListItems = ({ data, pager, loadingMore, handleLoadMore, selectedFilters, handleRemove }) => {
    const { t } = useTranslation('common');

    const filterSelected = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        xl: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />
    });

    return (
        <Box>
            <Box as="div" mt="16px">
                <Grid
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4,1fr)' }}
                    gap={'24px'}
                >
                    {data?.map(
                        (
                            { image, path, cleanUrl, title, price, product_id, mastersku, discount_percentage },
                            index
                        ) => (
                            <GridItem rowSpan={1} key={`Products-${index}`}>
                                <FeaturedProduct
                                    key={product_id}
                                    title={title}
                                    product_id={product_id}
                                    image={image}
                                    price={price}
                                    url={path}
                                    mastersku={mastersku}
                                    discount_percentage={discount_percentage}
                                    // list_price_formatted={list_price_formatted}
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
