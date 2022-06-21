import { Text, Box } from '@chakra-ui/react';
import FeaturedProduct from 'components/common/FeaturedProduct';
import SectionLink from 'components/common/Sections/SectionLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Container from '../Container';

const CarouselProducts = ({ data, title, type, settings = {}, fullWidth = false }) => {
    return (
        <Container fullWidth={fullWidth}>
            <Box mb="50px">
                <Text textStyle={'h3'} noOfLines={1} maxW={`calc(100% - 40px)`} mb={'20px'}>
                    {title}
                </Text>

                <Slider {...settings}>{renderSectionByType(type, data)}</Slider>
            </Box>
        </Container>
    );
};

export default CarouselProducts;

const renderSectionByType = (type, data) => {
    switch (type) {
        case 'carousel_product':
            return data?.map?.(
                ({ image, path, cleanUrl, title, price, product_id, mastersku, discount_percentage }) => (
                    <FeaturedProduct
                        key={product_id}
                        title={title}
                        product_id={product_id}
                        image={image}
                        price={price}
                        cleanUrl={cleanUrl}
                        url={path}
                        mastersku={mastersku}
                        discount_percentage={discount_percentage}
                    />
                )
            );
        case 'carousel_banner':
            return data?.map(({ type, image, link }) => (
                <SectionLink key={image + link?.url} link={link} image={image} />
            ));
        default:
            return null;
    }
};
