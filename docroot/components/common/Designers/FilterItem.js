import { Box, Text, Image } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function FilterItem() {
    const { t } = useTranslation('designers');
    const router = useRouter();

    return (
        <>
            <Box display={'flex'} alignItems={'center'} borderRight={'1px solid #919191'}>
                <Text textStyle={'sm'} p={'0 28px 0 12px'}>
                    {'ΤΕΧΝΙΚΗ'}
                </Text>
                <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} mr={'12px'} />
            </Box>
        </>
    );
}
