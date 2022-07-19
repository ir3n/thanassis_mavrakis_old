import HomeSlider from 'components/common/HomeSlider';
import { Box } from '@chakra-ui/react';
import BannerImage from 'components/common/BannerImage';
import CarouselProducts from 'components/common/CarouselProducts';
import CarouselTiles from 'components/common/CarouselTiles';
import Newsletter from '../Newsletter';
import LeftArrow from '/public/assets/leftarrow.svg';
import RightArrow from '/public/assets/rightarrow.svg';

// import Tracking from 'utils/tracking';

export const RenderSections = ({ sections }) => {
    const responsiveProduct = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ];
    // const responsiveBanner = [
    //     {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 4,
    //             infinite: true,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 992,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 5,
    //             infinite: true,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 576,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             infinite: true,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 320,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false
    //         }
    //     }
    // ];

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} id="product-carousel-nextarrow" zIndex={10} onClick={onClick}>
                <RightArrow />
            </Box>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} id="product-carousel-prevarrow" zIndex={10} onClick={onClick}>
                <LeftArrow />
            </Box>
        );
    }

    return (
        <div>
            {sections?.map((section, index) => {
                switch (section?.type) {
                    case 'slider':
                        return <HomeSlider slides={section.items} />;
                    case 'banner_image_left':
                        return (
                            <BannerImage key={section?.type + index} section={section} fullWidth={section?.fullWidth} />
                        );
                    case 'carousel_product':
                        return (
                            <CarouselProducts
                                key={section?.type + index}
                                fullWidth={section?.fullWidth}
                                data={section.items}
                                title={section.carousel_title}
                                type={section.type}
                                settings={{
                                    dots: false,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    responsive: responsiveProduct
                                }}
                            />
                        );
                    case 'carousel_banner':
                        return (
                            <CarouselProducts
                                key={section?.type + index}
                                fullWidth={section?.fullWidth}
                                settings={{
                                    dots: false,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    responsive: responsiveBanner
                                }}
                                data={section.items}
                                type={section.type}
                                title={section.carousel_title}
                            />
                        );
                    case 'carousel_tile':
                        return (
                            <CarouselTiles
                                key={section?.type + index}
                                fullWidth={section?.fullWidth}
                                data={section.items}
                                type={section.type}
                            />
                        );
                    case 'static_custom_sections':
                        return <Newsletter title={section?.static_section_type} />;
                }
            })}
        </div>
    );
};

export default RenderSections;
