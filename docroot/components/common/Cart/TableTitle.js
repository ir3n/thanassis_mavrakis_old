import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function TableTitle() {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box display={'flex'} borderBottom={'2px solid #000000'}>
                <Box w={'45%'} display={'flex'}>
                    <Text textStyle={'text'} textTransform={'uppercase'} color={'gray'} pb={'8px'} textAlign={'left'}>
                        {t('item')}
                    </Text>
                </Box>
                <Box w={{ base: '30%', lg: '15%' }}>
                    <Text textStyle={'text'} textTransform={'uppercase'} color={'gray'} pb={'8px'} textAlign={'left'}>
                        {t('price')}
                    </Text>
                </Box>
                <Box w={{ base: '30%', lg: '15%' }} textAlign={{ base: 'right', lg: 'center' }}>
                    <Text textStyle={'text'} textTransform={'uppercase'} color={'gray'} pb={'8px'} textAlign={'left'}>
                        {t('quantity')}
                    </Text>
                </Box>
                <Box display={{ base: 'none', lg: 'block' }} w={{ base: '25%', lg: '15%' }} textAlign={{ lg: 'right' }}>
                    <Text textStyle={'text'} textTransform={'uppercase'} color={'gray'} pb={'8px'} textAlign={'left'}>
                        {t('subtotal')}
                    </Text>
                </Box>
                <Box w={'10%'}></Box>
            </Box>
        </>
    );
}
