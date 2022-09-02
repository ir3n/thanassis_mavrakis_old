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

// import Tracking from 'utils/tracking';

export const RenderSections = ({ sections }) => {
    return (
        <Box overflow="hidden">
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
        </Box>
    );
};

export default RenderSections;
