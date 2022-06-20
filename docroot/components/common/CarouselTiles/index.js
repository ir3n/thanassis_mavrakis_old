import Container from 'components/common/Container';
import SectionButton from 'components/common/Sections/SectionButton';

const CarouselTiles = ({ data, fullWidth }) => {
    return (
        <Container
            display={'flex'}
            alignItems={'center'}
            justifyContent="space-between"
            flexDirection={{ base: 'column', lg: 'row' }}
            fullWidth={fullWidth}
            px={{ base: 0, md: '20px', lg: '120px' }}
            marginBottom={{ base: '64px', md: '80px' }}
        >
            {data?.map(({ type, background_color, cta, text }) => (
                <SectionButton key={type + text} cta={cta} backgroundColor={background_color} text={text} />
            ))}
        </Container>
    );
};

export default CarouselTiles;
