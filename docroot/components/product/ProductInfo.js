import { useContext, useEffect, useState } from 'react';
import { Text, Box, Button, Flex, useToast, Image } from '@chakra-ui/react';
import { getErrorMessage } from 'utils/helpers';
import MainContext from 'context';
import ProductQuantityBox from './ProductQuantityBox';
import { addToWishlist as apiAddToWishlist } from 'services/wishlist';
import useWishlist from 'hooks/useWishlist';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import MakeupComponent from './MakeupComponent';
import FragranceComponent from './FragranceComponent';
import PerfumeEnhancement from './PerfumeEnhancement';
import { formatPrice } from 'utils/helpers';

export default function ProductInfo({ data, selectedVariation, setSelectedVariation }) {
    const { t } = useTranslation('product');

    const router = useRouter();
    const toast = useToast();

    const [loadingAddToCart, setLoadingAddToCart] = useState(false);
    const [loadingAddToWishlist, setLoadingAddToWishlist] = useState(false);
    const [finalPrice, setFinalPrice] = useState('');
    const [selectedEssence, setSelectedEssence] = useState();

    const { openCart } = useContext(MainContext);
    const { create: addToCart } = useCart();
    // const { mutate: wishListMutate, wishListData } = useWishlist();

    useEffect(() => {
        selectedVariation && setFinalPrice(selectedVariation?.price_raw);
    }, [selectedVariation?.id]);

    const handleAddToCart = (product_id) => {
        setLoadingAddToCart(true);
        addToCart([
            {
                purchased_entity_type: 'commerce_product_variation',
                purchased_entity_id: selectedVariation?.id,
                quantity: '1',
                combine: true,
                product_type: selectedVariation?.attribute_type,
                essence_item_code:
                    selectedVariation?.attribute_type === 'fragrance'
                        ? selectedVariation?.essence_extra_doseis?.essence_item_code
                        : null,
                essence_qnt: selectedEssence?.essence_qnt,
                essence_price: selectedEssence?.essence_price
            }
        ]).finally(() => {
            setLoadingAddToCart(false);
            setTimeout(() => openCart(), 200);
        });
    };

    const list = router.locale + router.asPath;

    console.log('data: ', selectedVariation);

    return (
        <Box>
            <Box>
                <Flex justifyContent="space-between" mb="20px" align="center">
                    <Text textStyle="caption" fontWeight="600" color="green" textTransform="uppercase">
                        {data?.availability}
                    </Text>
                    {/* <Box onClick={handleAddToWishlist} isLoading={loadingAddToWishlist} cursor="pointer">
                        {isInWishList() ? (
                            <Image src="/assets/heart-solid.svg" w="20px" h="20px" />
                        ) : (
                            <Image src="/assets/heart-outline.svg" w="20px" h="20px" />
                        )}
                    </Box> */}
                </Flex>
                <Flex justifyContent="space-between" align="flex-end">
                    <Box>
                        <Text as="h4" textStyle="titleSm" fontWeight="700">
                            {data?.brand?.name}
                        </Text>
                        <Text as="h1" textStyle="titleSm" mb="10px">
                            {selectedVariation?.name}
                        </Text>
                    </Box>
                    <Box align="right" pl="30px">
                        <Text textStyle="caption" color="mediumGrey" textDecoration="line-through">
                            {selectedVariation?.list_price}
                        </Text>
                        <Text fontSize="24px" lineHeight="1.2">
                            {formatPrice(finalPrice)}
                        </Text>
                    </Box>
                </Flex>
                <Text textStyle="caption" color="lightGrey">
                    {selectedVariation?.sku}
                </Text>
            </Box>

            <Box my="20px">
                <Flex maxW={{ base: '100%', md: '210px' }}>
                    <ProductQuantityBox />
                    {data?.product_type === 'fragrance' && (
                        <FragranceComponent data={data?.variations} setSelectedVariation={setSelectedVariation} />
                    )}
                </Flex>

                {
                    {
                        makeup: (
                            <MakeupComponent
                                data={data?.variations}
                                setSelectedVariation={setSelectedVariation}
                                selectedVariation={selectedVariation}
                            />
                        ),
                        fragrance: (
                            <PerfumeEnhancement
                                data={selectedVariation?.essence_extra_doseis?.options}
                                setFinalPrice={setFinalPrice}
                                initPrice={selectedVariation?.price_raw}
                                setSelectedEssence={setSelectedEssence}
                            />
                        )
                    }[data?.product_type]
                }
            </Box>
            <Button
                onClick={() => handleAddToCart(data?.product_id)}
                isLoading={loadingAddToCart}
                variant="primary"
                w="full"
                isDisabled={selectedVariation?.stock_level > 0 ? false : true}
                mt="10px"
                mb="20px"
            >
                {t('purchase')}
            </Button>
        </Box>
    );
}
