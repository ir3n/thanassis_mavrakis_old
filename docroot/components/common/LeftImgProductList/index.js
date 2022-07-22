import { useBreakpointValue } from '@chakra-ui/react';
import LeftImgProductListMob from './LeftImgProductListMob';
import LeftImgProductListDesk from './LeftImgProductListDesk';

const LeftImgProductList = ({ title, text, items, image, link }) => {
    return useBreakpointValue({
        base: <LeftImgProductListMob title={title} text={text} items={items} image={image} link={link} />,
        md: <LeftImgProductListDesk title={title} text={text} items={items} image={image} link={link} />
    });
};

export default LeftImgProductList;
