import { Image, Text, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const BgImageWithText = ({ image, icon, title, text, cta }) => {
    return (
        <Box
            bgImage={image}
            bgAttachment="fixed"
            bgPos="center"
            bgSize="cover"
            minH="350px"
            position="relative"
            mb={{ base: '50px', lg: '90px' }}
        >
            <Box backgroundColor="rgba(33, 33, 33, 0.9)" position="absolute" top="0" left="0" w="full" h="100%"></Box>
            <Box align="center" color="white" p="0 50px 20px 50px" position="relative" zIndex="1">
                <Image src={icon} width="50px" alt={title} margin="auto" />
                <Text as="h3" textStyle="h4" mt={{ base: '40px', lg: '15px' }} mb="15px">
                    {title}
                </Text>
                <Text as="p" textStyle="md" my="15px" maxW="400px" m="auto">
                    {text}
                </Text>
                <Box mt="50px">
                    <NextLink href={cta?.url}>
                        <Button variant="outlineWhite">{cta?.title}</Button>
                    </NextLink>
                </Box>
            </Box>
        </Box>
    );
};

export default BgImageWithText;
