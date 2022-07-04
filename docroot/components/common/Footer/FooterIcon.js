import { Flex, Image } from '@chakra-ui/react';

const FooterIcon = ({ src, alt }) => {
    const imageUrl = `/assets/footer/${src}`;
    return (
        <Flex align="center" justifyContent="center" w={{ base: '45px', lg: '60px' }} h={{ base: '30px', lg: '45px' }}>
            <Image src={imageUrl} alt={alt} />
        </Flex>
    );
};

export default FooterIcon;
