import HomeSlider from 'components/common/HomeSlider';
import { Box } from '@chakra-ui/react';
import CarouselProducts from 'components/common/CarouselProducts';
import CarouselTiles from 'components/common/CarouselTiles';
import CarouselCategoryTiles from 'components/common/CarouselCategoryTiles';
import BgImageTileGrid from '../BgImageTileGrid';
import BannerImageRight from '../BannerImageRight';
import Video from '../Video';
import Videos from '../Videos';
import LeftImgProductList from '../LeftImgProductList';
import BgImageWithText from '../BgImageWithText';
import CarouselProductGrid from '../CarouselProductGrid';
import BgImgProductList from '../BgImgProductList';
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
                        return <HomeSlider key={section?.type + index} slides={section.items} />;
                    case 'carousel_product':
                        return (
                            <CarouselProducts
                                key={section?.type + index}
                                title={section?.title}
                                items={section?.items}
                                cta={section?.cta}
                            />
                        );
                    case 'carousel_banner':
                        return (
                            <CarouselProducts
                                key={section?.type + index}
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
                                data={section?.items}
                                type={section?.type}
                                title={section?.carousel_title}
                            />
                        );
                    case 'carousel_tile':
                        return <CarouselTiles key={section?.type + index} data={section?.items} type={section?.type} />;
                    case 'video':
                        return <Video key={section?.type + index} data={section} />;
                    case 'bg_image_tiles_grid':
                        return (
                            <BgImageTileGrid key={section?.type + index} data={section?.items} type={section?.type} />
                        );
                    case 'banner_image_right':
                        return (
                            <BannerImageRight
                                key={section?.type + index}
                                title={section?.title}
                                imageTitle={section?.image_title}
                                text={section?.description}
                                cta={section?.cta}
                                image={section?.image}
                                dark={section?.dark_bg}
                                centerAlign={section?.align_center}
                                type={section?.type}
                            />
                        );
                    case 'videos':
                        return (
                            <Videos
                                key={section?.type + index}
                                title={section?.title}
                                items={section?.items}
                                cta={section?.cta}
                            />
                        );
                    case 'left_image_product_list':
                        return (
                            <LeftImgProductList
                                key={section?.type + index}
                                title={section?.title}
                                text={section?.description}
                                link={section?.image_link}
                                image={section?.image}
                                items={section?.items}
                                type={section?.type}
                            />
                        );
                    case 'bg_image_with_text':
                        return (
                            <BgImageWithText
                                key={section?.type + index}
                                title={section?.title}
                                text={section?.text}
                                cta={section?.cta}
                                image={section?.image}
                                icon={section?.icon}
                                type={section?.type}
                            />
                        );
                    case 'image_with_title_carousel':
                        return <CarouselTiles key={section?.type + index} data={section?.items} type={section?.type} />;
                    case 'carousel_category_tile':
                        return (
                            <CarouselCategoryTiles
                                key={section?.type + index}
                                title={section?.title}
                                data={section?.items}
                                type={section?.type}
                            />
                        );
                    case 'product_grid':
                        return (
                            <CarouselProductGrid
                                key={section?.type + index}
                                title={section?.title}
                                items={section?.items}
                                cta={section?.cta}
                            />
                        );
                    case 'background_image_product_list':
                        return (
                            <BgImgProductList
                                key={section?.type + index}
                                cta={section?.cta}
                                image={section?.image}
                                items={section?.items}
                            />
                        );
                }
            })}
        </div>
    );
};

export default RenderSections;
