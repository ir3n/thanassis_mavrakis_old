import { AspectRatio, Box, Text } from '@chakra-ui/react';
import Container from '../Container';

const Video = ({ data }) => {
    return (
        <Container mb={{ base: '50px', xl: '60px' }}>
            <Text as="h3" textStyle="h4" color="brand" mb={'30px'} align="center">
                {data.title}
            </Text>
            <AspectRatio maxW="full" ratio={2 / 1}>
                <iframe src={data.video} allowFullScreen />
            </AspectRatio>
        </Container>
    );
};

export default Video;
