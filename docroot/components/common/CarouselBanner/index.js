import { Container, Box } from '@chakra-ui/react';
import SectionLink from 'components/common/SectionLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import LeftArrow from '/public/assets/leftarrow.svg';
import RightArrow from '/public/assets/rightarrow.svg';

const CarouselBanner = ({ data }) => {
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

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} zIndex={10} onClick={onClick}>
                <RightArrow />
            </Box>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} zIndex={10} onClick={onClick}>
                <LeftArrow />
            </Box>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: responsive
    };

    return (
        <Container mb="50px">
            <Slider {...settings}>
                {data?.map(({ type, image, link }) => (
                    <SectionLink key={image + link?.url} link={link} image={image} />
                ))}
            </Slider>
        </Container>
    );
};

export default CarouselBanner;
