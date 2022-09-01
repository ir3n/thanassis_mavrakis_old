import { Link, useToast, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';

export default function ClearAll({ item, handleRemoveItem, handleUpdateQuantity, image, sku, price }) {
    const toast = useToast();
    const { t } = useTranslation('cart');

    return (
        <NextLink href={'/' || '#'} passHref prefetch={false}>
            <Link _hover="{ textDecoration: 'none' }">
                <Button
                    variant="outlineBlack"
                    w={{ base: '100%', lg: '25%' }}
                    textTransform={'uppercase'}
                    textStyle={'md'}
                    mt={'35px'}
                >
                    {'Καθαρισμός όλων'}
                </Button>
            </Link>
        </NextLink>
    );
}
