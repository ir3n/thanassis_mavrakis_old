import Slider from 'react-slick';
import { Flex } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = ({ children, ...settings }) => <Slider {...settings}>{children}</Slider>;

export default CustomSlider;
