import { Box, Text, useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function PriceTitleMobile() {
    const toast = useToast();
    const { t } = useTranslation('cart');

    return (
        <Box w={{ base: '100%', lg: '55%' }} display={'flex'} mt={{ base: '25px', lg: '0' }}>
            <Box w={{ base: '33%', lg: '27%' }} color={'lightGrey'} textStyle={'note'}>
                <Text>{'TIMH'}</Text>
            </Box>
            <Box w={{ base: '33%', lg: '27%' }} color={'lightGrey'} textStyle={'note'} textAlign={'center'}>
                <Text>{'ΠΟΣΟΤΗΤΑ'}</Text>
            </Box>
            <Box w={{ base: '33%', lg: '36%' }} color={'lightGrey'} textStyle={'note'} textAlign={'right'}>
                <Text>{'ΥΠΟΣΥΝΟΛΟ'}</Text>
            </Box>
        </Box>
    );
}
