import { Box, Text, Button, Image, Link } from '@chakra-ui/react';
import Container from 'components/common/Container';

const CardMember = ({ color, image, text, link, price }) => {
    return (
        <>
            <Container>
                <Box display="flex" h="424px">
                    <Box
                        display="flex"
                        flexDir={'column'}
                        justifyContent="space-between"
                        backgroundColor={color}
                        pl="72px"
                        pr="48px"
                        pt="72px"
                        pb="60px"
                    >
                        <Box display="flex" justifyContent={'space-between'}>
                            <Box>
                                <Text width={'316px'} mr="55px" mb="1rem" textStyle={'h2'} color="white">
                                    {text}
                                </Text>
                                <Link>
                                    <Text textStyle={'md'} color="white">
                                        {link}
                                    </Text>
                                </Link>
                            </Box>
                            <Text textStyle={'h2'} color="white">
                                {price}
                            </Text>
                        </Box>
                        <Box>
                            <Box>+</Box>
                            <Button variant="outline" size="md" mt={'1rem'}>
                                ΕΓΓΡΑΦΗ/ΑΝΑΝΕΩΣΗ
                            </Button>
                        </Box>
                    </Box>
                    <Image src={image} />
                </Box>
            </Container>
        </>
    );
};

export default CardMember;
