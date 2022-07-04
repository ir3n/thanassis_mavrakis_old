import { Flex, Image } from '@chakra-ui/react';

const FooterIcon = ({ src, alt }) => {
    const imageUrl = `/assets/footer/${src}`;
    return (
        <Flex align="center" justifyContent="center" w="60px" h="45px">
            <Image src={imageUrl} alt={alt} />
        </Flex>
    );
};

export default FooterIcon;
