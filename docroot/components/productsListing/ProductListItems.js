import { Box, Button, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import FeaturedProduct from 'components/common/FeaturedProduct';
import useTranslation from 'next-translate/useTranslation';
// import { getFormattedFilters } from 'utils/helpers';
// import Filter from 'components/common/Filter';
import SelectedFilters from 'components/productsListing/SelectedFilters';

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
            {filterSelected}
            <Box as="div">
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
                    {data?.map(
                        (
                            {
                                tags,
                                onlineExclusive,
                                title,
                                image,
                                category,
                                price_formatted,
                                list_price_formatted,
                                url,
                                mastersku,
                                product_id,
                                discount_percentage,
                                price
                            },
                            index
                        ) => (
                            <GridItem rowSpan={1} colSpan={[3, 3, 3, 2, 2]} key={`Products-${index}`}>
                                <FeaturedProduct
                                    product_id={product_id}
                                    tags={tags}
                                    onlineExclusive={onlineExclusive}
                                    title={title}
                                    image={image}
                                    category={category}
                                    normalPrice={price}
                                    url={url}
                                    mastersku={mastersku}
                                    discount_percentage={discount_percentage}
                                    price={price_formatted}
                                    list_price_formatted={list_price_formatted}
                                />
                            </GridItem>
                        )
                    )}
                </Grid>
                {pager?.hasNext ? (
                    <Box as="div" textAlign={'center'} my={'50px'}>
                        <Button
                            variant={'secondary'}
                            isLoading={loadingMore}
                            minW={{ base: '100%', sm: '350px' }}
                            maxW={'100%'}
                            onClick={handleLoadMore}
                        >
                            {t('loadMore')}
                        </Button>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
};

export default ProductListItems;
