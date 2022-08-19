import CustomSlider from '../CustomSlider';
import Slide from './Slide';

const HomeSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
        <CustomSlider {...settings} className="hero-banner-slider">
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
        </CustomSlider>
    );
};

export default HomeSlider;
