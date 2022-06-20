import { Box, Grid, GridItem } from '@chakra-ui/layout';
import useProducts from 'hooks/useProducts';
import useCart from 'hooks/useCart';

import FeaturedProduct from 'components/common/FeaturedProduct';

import testImage from 'public/assets/test_image.jpg';
import { RepeatClockIcon } from '@chakra-ui/icons';

export default function UI() {
    // const { cartData, addToCart } = useCart();

    const { productCategoryData, error, isLoading, isValidating } = useProducts(3, {}, 1);

    return (
        <>
            {productCategoryData?.data ? (
                <Box border="1px solid red">
                    <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', sm: 'repeat(2,1fr)' }}
                        gap={{ base: 1, md: 4 }}
                    >
                        {productCategoryData?.data?.map?.(
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
                                <GridItem rowSpan={1} key={`Products-${index}`}>
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
                </Box>
            ) : (
                <></>
            )}
        </>
    );
}
