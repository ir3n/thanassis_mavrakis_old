import { Text, Box } from '@chakra-ui/react';
import FeaturedProduct from 'components/common/FeaturedProduct';
import SectionLink from 'components/common/Sections/SectionLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Container from '../Container';
import LeftArrow from '/public/assets/leftarrow.svg';
import RightArrow from '/public/assets/rightarrow.svg';

const CarouselProducts = ({ data, title, type, settings, fullWidth }) => {
    const responsive = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ];

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     slidesToShow: 3,
    //     speed: 500,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     responsive: responsive
    // };

    // function SampleNextArrow(props) {
    //     const { className, onClick } = props;
    //     return (
    //         <Box className={className} id="product-carousel-nextarrow" zIndex={10} onClick={onClick}>
    //             <RightArrow />
    //         </Box>
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { className, onClick } = props;
    //     return (
    //         <Box className={className} id="product-carousel-prevarrow" zIndex={10} onClick={onClick}>
    //             <LeftArrow />
    //         </Box>
    //     );
    // }
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
