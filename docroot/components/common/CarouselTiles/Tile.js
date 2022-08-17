import { Image, VStack, Text, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Tile = ({ title, image, description, cta }) => {
    const createMarkup = () => {
        return { __html: title };
    };

    return (
        <VStack spacing={4}>
            <Text as="h4" textStyle="h4" fontWeight="100" dangerouslySetInnerHTML={createMarkup()}></Text>
            <NextLink href={cta?.url || ''} passHref>
                <Link>
                    <Image src={image} alt={title} transition="0.4s ease" _hover={{ transform: 'translateY(-4px)' }} />
                </Link>
            </NextLink>
            <Text as="p" textStyle="md" align="center" noOfLines={2}>
                {description}
            </Text>
            <NextLink href={cta?.url || ''} passHref>
                <Button variant={'outlineWhite'} w={{ base: 'full', lg: 'auto' }}>
                    {cta?.title}
                </Button>
            </NextLink>
        </VStack>
    );
};

export default Tile;
