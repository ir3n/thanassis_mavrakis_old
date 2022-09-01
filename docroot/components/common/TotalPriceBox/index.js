import { Box, Text, FormControl, Input } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const TotalPriceBox = ({ data }) => {
    const { t } = useTranslation('account');
    const router = useRouter();

    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #CDCDCD'} py={'10px'}>
                <Text>{t('cart:subtotal')}</Text>
                <Text>{data?.sub_total_price}</Text>
            </Box>

            <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #CDCDCD'} py={'10px'}>
                <Text>{'Φόροι (Συμπεριλαμβάνονται)'}</Text>
                <Text>{'10,78 €'}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #CDCDCD'} py={'10px'}>
                <Box>
                    <Text>{'Έκπτωση'}</Text>
                </Box>
                <Text>{'10,78 €'}</Text>
            </Box>

            <Box
                display={'flex'}
                justifyContent={'space-between'}
                borderTop={'1px solid #000000'}
                p={'25px 0 5px 0'}
                fontWeight={'700'}
            >
                <Text>{'Σύνολο'}</Text>
                <Text>{data?.total_price}</Text>
            </Box>
        </Box>
    );
};

export default TotalPriceBox;
