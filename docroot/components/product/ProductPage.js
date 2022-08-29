import {
    Flex,
    Box,
    Grid,
    GridItem,
    Text,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Container from 'components/common/Container';
import { useEffect, useState } from 'react';
import ProductPhotoSlider from './ProductPhotoSlider';
import ProductInfo from './ProductInfo';
import ProductFlags from './ProductFlags';
import useProduct from 'hooks/useProduct';

import MetaTagsHandler from '../common/MetaTagsHandler';
import BreadCrumb from 'components/common/BreadCrumb';
import Tracking from 'utils/tracking';
import CarouselProducts from 'components/common/CarouselProducts';
import useTranslation from 'next-translate/useTranslation';

export default function ProductPage({ productData }) {
    const { t } = useTranslation('product');

    const [detailsIsClicked, setDetailsIsClicked] = useState(false);

    const [selectedVariation, setSelectedVariation] = useState();

    useEffect(() => {
        productData &&
            setSelectedVariation(
                productData?.default_variation_id
                    ? productData?.variations.find((i) => i?.id === productData?.default_variation_id)
                    : productData?.variations?.[0]
            );
    }, [productData?.default_variation_id]);

    let varImages = selectedVariation?.variation_media
        ? selectedVariation?.variation_media?.map((item, index) => item?.type === 'image' && item?.url)
        : [];
    const prodImages = productData?.product_media
        ? productData?.product_media?.map((item, index) => item?.type === 'image' && item?.url)
        : [];

    let images = [...varImages, ...prodImages];

    return (
        <>
            {productData?.metaTags && <MetaTagsHandler metaTags={productData?.metaTags} />}
            <Container>
                <BreadCrumb breadcrumbs={productData?.breadcrumbs} />

                <Grid
                    templateColumns={{ base: '1', md: 'repeat(2, 1fr)' }}
                    gap={{ base: '0', md: '20px', xl: '70px' }}
                    mb={{ base: '30px', md: '70px' }}
                >
                    <GridItem mb="15px">
                        <ProductPhotoSlider images={images} />
                    </GridItem>
                    <GridItem>
                        <ProductFlags
                            teaser={false}
                            webOnly={productData?.web_only}
                            discount={selectedVariation?.discount_percentage}
                        />
                        <ProductInfo
                            data={productData}
                            selectedVariation={selectedVariation}
                            setSelectedVariation={setSelectedVariation}
                        />
                        <Text textStyle="caption" align={{ base: 'center', md: 'left' }}>
                            <strong>ΔΩΡΕΑΝ ΑΠΟΣΤΟΛΗ ΑΠΟ 39€.</strong> ΕΠΙΛΟΓΗ ΔΕΙΓΜΑΤΟΣ ΜΕ ΚΑΘΕ ΠΑΡΑΓΓΕΛΙΑ.
                        </Text>
                    </GridItem>
                </Grid>
                <Accordion mb="50px" allowMultiple>
                    <AccordionItem border="none">
                        <AccordionButton
                            justifyContent={'space-between'}
                            px="0px"
                            pb={{ base: '2px', md: '10px' }}
                            borderBottom="1px solid lightGrey"
                            _hover={{ bg: 'transparent' }}
                            onClick={() => {
                                setDetailsIsClicked(!detailsIsClicked);
                            }}
                        >
                            <Box textStyle={'titleSm'}>{t('Details')}</Box>
                            {!detailsIsClicked ? (
                                <Box fontSize="24px" lineHeight="1.2" padding={'4px'}>
                                    <ChevronDownIcon />
                                </Box>
                            ) : (
                                <Box fontSize="24px" lineHeight="1.2" padding={'4px'}>
                                    <ChevronUpIcon />
                                </Box>
                            )}
                        </AccordionButton>
                        <AccordionPanel px={{ base: '0', md: '30px' }} pb="20px">
                            <Grid templateColumns={{ base: '1', lg: 'repeat(2, 1fr)' }} gap="30px">
                                {productData?.details?.map(({ key, value }, index) => (
                                    <GridItem key={`product-info-${index}`}>
                                        <VStack
                                            align="start"
                                            px="0px"
                                            pt="20px"
                                            pb="20px"
                                            spacing="20px"
                                            key={productData?.details?.key}
                                        >
                                            <Text textStyle={'textLg'} fontWeight="bold">
                                                {key}
                                            </Text>
                                            <Text textStyle={'text'}>{value}</Text>
                                        </VStack>
                                    </GridItem>
                                ))}
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>

            <CarouselProducts items={productData?.relative_items || []} title={t('relative_products')} />
        </>
    );
}
