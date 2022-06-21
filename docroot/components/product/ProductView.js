import { Flex, useBreakpointValue, Box } from '@chakra-ui/react';
import Container from 'components/common/Container';
import { useEffect, useState } from 'react';
import ProductPhotos from './ProductPhotos';
import ProductInfo from './ProductInfo';
import ProductPhotosMobile from './ProductPhotosMobile';
import useProduct from 'hooks/useProduct';
import MetaTagsHandler from '../common/MetaTagsHandler';
import Tracking from 'utils/tracking';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import CarouselProducts from 'components/common/CarouselProducts';
import useTranslation from 'next-translate/useTranslation';

export default function ProductView({
    product_id,
    title,
    body,
    category,
    productMedia,
    master_sku,
    size,
    path,
    default_variation,
    breadcrumbs,
    isRing,
    ringSizeGuide,
    pageData
}) {
    const { productData } = useProduct(product_id, { ...pageData });
    const { t } = useTranslation('product');
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState({ index: 0 });

    const handleCLose = () => {
        setIsOpen(false);
    };

    const items = productData?.productMedia?.map((i, index) => {
        return {
            src: i.url,
            w: 1000,
            h: 1000
        };
    });

    const handleZoom = (index) => {
        setOptions({ index: parseInt(index) });
        setIsOpen(true);
    };

    const productPhotosResponsive = useBreakpointValue({
        base: (
            <ProductPhotosMobile
                productMedia={productData?.productMedia}
                productTitle={productData?.title}
                handleZoom={handleZoom}
            />
        ),
        sm: (
            <ProductPhotosMobile
                productMedia={productData?.productMedia}
                productTitle={productData?.title}
                handleZoom={handleZoom}
            />
        ),
        md: (
            <ProductPhotosMobile
                productMedia={productData?.productMedia}
                productTitle={productData?.title}
                handleZoom={handleZoom}
            />
        ),
        lg: (
            <ProductPhotos
                productMedia={productData?.productMedia}
                productTitle={productData?.title}
                handleZoom={handleZoom}
            />
        ),
        xl: (
            <ProductPhotos
                productMedia={productData?.productMedia}
                productTitle={productData?.title}
                handleZoom={handleZoom}
            />
        )
    });

    return (
        <Container>
            {productData?.metaTags && <MetaTagsHandler metaTags={productData?.metaTags} />}
            <PhotoSwipe isOpen={isOpen} items={items} onClose={handleCLose} options={options} />

            <Box
                d="flex"
                flexDir={{ sm: 'column', base: 'column', md: 'column', lg: 'row', xl: 'row' }}
                justifyContent={'space-between'}
                padding="40px 0"
            >
                {productPhotosResponsive}
                <ProductInfo
                    productData={productData}
                    product_id={product_id}
                    metalColor={productData?.metal_colour}
                    title={productData?.title}
                    body={productData?.body}
                    category={productData?.category?.name}
                    availability={productData?.availability}
                    variations={productData?.variations}
                    defaultVariation={
                        productData?.default_variation?.id
                            ? productData?.default_variation
                            : productData?.variations?.[0] || ''
                    }
                    masterSku={productData?.master_sku}
                    path={productData?.path}
                    relativeColours={productData?.relativeColours}
                    description={productData?.description}
                    isRing={isRing}
                    ringSizeGuide={ringSizeGuide}
                    dimension={productData?.details}
                />
            </Box>
            <CarouselProducts
                data={productData?.relativeItems || []}
                title={t('relative_products')}
                type={'carousel_product'}
            />
        </Container>
    );
}
