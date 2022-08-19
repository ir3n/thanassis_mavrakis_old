import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CustomSlider = ({ children, ...settings }) => {
    return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
