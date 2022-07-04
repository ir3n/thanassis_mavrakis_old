import { Box, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function ItemPerPage() {
    const { t } = useTranslation('designers');
    const router = useRouter();

    return (
        <>
            <Box display={'flex'} py={'12px'}>
                <Text pr={'18px'} textStyle={'caption'}>
                    {t('per')}
                </Text>
                <UnorderedList listStyleType={'none'} ml={'0'} display={'flex'} textStyle={'caption'}>
                    <ListItem pr={'18px'}>
                        <Link>{'24'}</Link>
                    </ListItem>
                    <ListItem pr={'18px'}>
                        <Link>{'48'}</Link>
                    </ListItem>
                    <ListItem>
                        <Link>{'100'}</Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </>
    );
}
