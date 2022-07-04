import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import SocialIcons from './SocialIcons';

const SocialBlock = () => {
    const { t } = useTranslation('footer');

    const social = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/DustandCream.Cyprus'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/dustandcream.cyprus'
        },
        {
            name: 'Tiktok',
            url: 'https://www.tiktok.com/dustandcream.cyprus'
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/dustandcream.cyprus'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/dustandcream.cyprus'
        }
    ];

    return (
        <Box align="right">
            <Text as="h4" textStyle={'sm'} color="grey" paddingBottom={'15px'}>
                {t('FOLLOW US')}
            </Text>
            <SocialIcons arr={social} />
        </Box>
    );
};

export default SocialBlock;
