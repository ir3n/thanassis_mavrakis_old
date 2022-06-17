import { useContext, useEffect, useState } from 'react';
import {
    Text,
    Box,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react';
import { ChevronDownIcon, AddIcon } from '@chakra-ui/icons';
import AMMContext from 'context';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import { useRouter } from 'next/router';
import ProductQuantityBox from './ProductQuantityBox';
import CrossIcon from '../../public/assets/cross-light.svg';
import CloseIcon from '../../public/assets/exitbutton-light.svg';
import ProductSize from './ProductSize';

export default function ProductInfo({
    title,
    variations,
    defaultVariation,
    masterSku,
    metalColor,
    availability,
    description,
    productData,
    dimension
}) {
    const { t } = useTranslation('product');
    const [infoIsClicked, setInfoIsClicked] = useState(false);
    const [detailsIsClicked, setDetailsIsClicked] = useState(false);
    const [sizeData, setSizeData] = useState(null);

    const router = useRouter();

    const dataHandler = (productData) => {
        setSizeData(productData);
    };

    const [loadingAddToCart, setLoadingAddToCart] = useState(false);
    const [selectedVariation, setSelectedVariation] = useState(
        defaultVariation?.id ? variations.find((i) => i.id === defaultVariation.id) : variations?.[0]
    );

    const { mutate, cartData } = useCart();
    const { openCart } = useContext(AMMContext);
    const list = router.locale + router.asPath;

    useEffect(() => {
        setSelectedVariation(
            defaultVariation?.id ? variations.find((i) => i.id === defaultVariation.id) : variations?.[0]
        );
    }, [defaultVariation.id]);

    return (
        <Box d="flex" id="info-box" overflowX={'hidden'} flexDir={'column'} mt="15px" width={'456px'} maxWidth="100%">
            <Box
                d="flex"
                flexDir={'row'}
                width="406px"
                height={'32px'}
                justifyContent={'flex-start'}
                alignContent={'center'}
                textAlign="left"
                mb={'8px'}
            >
                <Text as={'h1'} textStyle="lg">
                    {title}
                </Text>
            </Box>
            <Box d="flex">
                {defaultVariation.list_price ? (
                    <Box as={'p'} fontSize={'26px'} mb={'20px'} mr="12px" color={'lightGrey'}>
                        <del>{defaultVariation.list_price}</del>
                    </Box>
                ) : (
                    ''
                )}
                <Box as={'p'} fontWeight={700} textStyle="lg" mb={'20px'} color={'text.primary'} mr="12px">
                    {sizeData ? sizeData[0]?.price : defaultVariation.price}
                </Box>
                {defaultVariation.discount_percentage ? (
                    <Box as={'p'} fontWeight={700} fontSize={'26px'} mb={'20px'} color={'brand.900'}>
                        {defaultVariation.discount_percentage}
                    </Box>
                ) : (
                    ''
                )}
            </Box>

            <Text as={'p'} fontWeight={400} fontSize={'16px'} mb={'5px'}>
                {metalColor && (
                    <Text as={'span'}>
                        <strong>{t('color')}:</strong>
                    </Text>
                )}
                {metalColor?.name}
            </Text>

            <Box mb={'20px'} d="flex" flexDir={'column'}>
                {/* <Button
                    w={'100%'}
                    onClick={handleAddToCart}
                    isLoading={loadingAddToCart}
                    isDisabled={selectedVariation?.stock_level > 0 && selectedVariation?.status ? false : true}
                >
                    {selectedVariation?.stock_level > 0 && selectedVariation?.status ? t('addToCard') : t('outOfStock')}
                </Button> */}

                {
                    <ProductSize
                        sizes={productData.variations}
                        defaultSize={productData.default_variation}
                        sizeData={sizeData}
                        handleSizeSelection={dataHandler}
                    />
                }
                <ProductQuantityBox />
                <Button
                    variant={'primary'}
                    size="xl"
                    textTransform={'uppercase'}
                    _focus={{ boxShadow: 'none' }}
                    alignSelf={{ base: 'center', lg: 'self-start' }}
                >
                    {t('purchase')}
                </Button>
                <Text as={'p'} textStyle="caption" mb={'8px'} mt="15px">
                    <Text as={'span'} pr="2px">
                        {t('code')}
                    </Text>
                    {sizeData ? sizeData[0]?.sku : masterSku}
                </Text>
                <Text textStyle={'caption'} fontWeight="bold">
                    {availability}
                </Text>
            </Box>
            <Accordion allowMultiple>
                <AccordionItem borderTop={'none'}>
                    <AccordionButton
                        justifyContent={'space-between'}
                        px="0px"
                        pb="8px"
                        _focus={{ boxShadow: 'none' }}
                        _hover={{ bg: 'white' }}
                        onClick={() => {
                            setDetailsIsClicked(!detailsIsClicked);
                        }}
                    >
                        <Box textStyle={'md'}>{t('description')}</Box>
                        {!detailsIsClicked ? (
                            <Box fontSize="24px" padding={'4px'}>
                                <CrossIcon />
                            </Box>
                        ) : (
                            <Box fontSize="24px" padding={'4px'}>
                                <CloseIcon />
                            </Box>
                        )}
                    </AccordionButton>
                    <AccordionPanel px="0px" pt="24px" pb="20px">
                        <Text
                            as="p"
                            textStyle="md"
                            dangerouslySetInnerHTML={{
                                __html: description
                            }}
                        ></Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton
                        justifyContent={'space-between'}
                        px="0px"
                        pb="8px"
                        onClick={() => {
                            setInfoIsClicked(!infoIsClicked);
                        }}
                        _focus={{ boxShadow: 'none' }}
                        _hover={{ bg: 'white' }}
                    >
                        <Box textStyle={'md'}>{t('details')}</Box>
                        {!infoIsClicked ? (
                            <Box fontSize="24px" padding={'4px'}>
                                <CrossIcon />
                            </Box>
                        ) : (
                            <Box fontSize="24px" padding={'4px'}>
                                <CloseIcon />
                            </Box>
                        )}
                    </AccordionButton>
                    {dimension?.map(({ key, value }, index) => (
                        <AccordionPanel px="0px" pt="24px" pb="20px" key={key}>
                            <Text textStyle={'md'} fontWeight="bold" mb="16px">
                                {key}
                            </Text>
                            <Text textStyle={'md'}>{value}</Text>
                        </AccordionPanel>
                    ))}
                </AccordionItem>
            </Accordion>
        </Box>
    );
}
