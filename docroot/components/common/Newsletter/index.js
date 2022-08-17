import { Box, Button, Text, Input, Flex } from '@chakra-ui/react';
import Container from '../Container';

const Newsletter = () => {
    return (
        <Box bg="newsletter" py={{ base: '25px', md: '50px' }}>
            <Container>
                <Flex
                    align="center"
                    justifyContent="space-between"
                    direction={{ base: 'column', md: 'row' }}
                    maxW={{ base: '340px', md: '100%' }}
                    m="auto"
                >
                    <Box pr="20px" mb={{ base: '15px', md: '0' }}>
                        <Text as="h3" fontSize="18px" weight="500" mb="15px">
                            NEVER MISS AN UPDATE
                        </Text>
                        <Text as="p" textStyle={'md'}>
                            Don’t miss a thing. Sign up to receive news and updates.
                        </Text>
                    </Box>

                    <Box maxW="450px" w="full">
                        <Flex justifyContent="end" mb="15px">
                            <Input
                                bg="white"
                                placeholder="Your email"
                                border="none"
                                borderRadius="0"
                                mr={{ base: '5px', md: '10px' }}
                                w="100%"
                                maxW="340px"
                                h="40px"
                            />
                            <Button variant="outlineBlack" minW="107px" h="40px">
                                SIGN UP
                            </Button>
                        </Flex>
                        <Text as="p" textStyle="captionSm" maxW="340px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat odio interdum neque, nulla
                            lacinia commodo neque,
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Newsletter;
