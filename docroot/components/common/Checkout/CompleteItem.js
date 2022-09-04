import { Box, Text, Image } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function CompleteItem({ quantity, image, sku, title, price }) {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box display="flex" p={'18px 0'} borderTop={'1px solid #CDCDCD'} pos={'relative'}>
                <Box w={'60%'} display="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                    <Image w={'80px'} src={image} alt={''} />
                    <Box
                        pl={{ base: '0px', lg: '12px' }}
                        pt={{ base: '12px', lg: '0px' }}
                        textStyle={'sm'}
                        display="flex"
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                    >
                        <Text pb={'8px'}>{title}</Text>
                        <Text pb={'8px'} color={'darkGrey'}>
                            {t('code')}
                            {sku}
                        </Text>
                    </Box>
                </Box>
                <Box w={'40%'}>
                    <Box
                        pl={{ base: '0px', lg: '12px' }}
                        pt={{ base: '12px', lg: '0px' }}
                        textStyle={'sm'}
                        display="flex"
                        flexDirection={'column'}
                    >
                        <Text pb={'8px'}>
                            {'Ποσ:'}
                            {quantity}
                        </Text>
                        <Text pb={'8px'}>{price}</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
