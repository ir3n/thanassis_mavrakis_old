import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';

const HomeSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="hero-banner-slider">
            {slides.map((slide, index) => {
                return (
                    <Slide
                        link={slide.cta}
                        image={slide.image}
                        mobileImage={slide.mobileImage}
                        key={`slide-${index}`}
                    />
                );
            })}
        </Slider>
    );
};

export default HomeSlider;
