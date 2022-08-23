import { Image, VStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const CategoryTile = ({ image, cta }) => {
    return (
        <VStack spacing={4}>
            <NextLink href={cta?.url || ''} passHref>
                <Link>
                    <Image
                        src={image}
                        alt={cta?.title}
                        transition="0.4s ease"
                        _hover={{ transform: 'translateY(-4px)' }}
                    />
                </Link>
            </NextLink>
            <NextLink href={cta?.url || ''} passHref>
                <Link>
                    <Text textStyle="subtitle" fontWeight="800" align="center">
                        {cta?.title}
                    </Text>
                </Link>
            </NextLink>
        </VStack>
    );
};

export default CategoryTile;
