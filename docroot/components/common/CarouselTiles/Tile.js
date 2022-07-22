import { Image, VStack, Text, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const Tile = ({ title, image, description, cta }) => {
    const createMarkup = () => {
        return { __html: title };
    };

    return (
        <VStack spacing={4}>
            <Text as="h4" textStyle="h4" fontWeight="100" dangerouslySetInnerHTML={createMarkup()}></Text>
            <NextLink href={cta?.url || ''}>
                <a>
                    <Image
                        src={image}
                        alt="DUST+CREAM"
                        transition="0.4s ease"
                        _hover={{ transform: 'translateY(-4px)' }}
                    />
                </a>
            </NextLink>
            <Text as="p" textStyle="md" align="center" noOfLines={2}>
                {description}
            </Text>
            <NextLink href={cta?.url || ''}>
                <Button variant={'outlineWhite'} w={{ base: 'full', lg: 'auto' }}>
                    {cta?.title}
                </Button>
            </NextLink>
        </VStack>
    );
};

export default Tile;
