import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import SocialIcons from './SocialIcons';
import social from 'constants/social';

const SocialBlock = () => {
    const { t } = useTranslation('footer');

    return (
        <Box align="right">
            <Text as="h4" textStyle="sm" color="grey" pb="15px">
                {t('FOLLOW US')}
            </Text>
            <SocialIcons arr={social} />
        </Box>
    );
};

export default SocialBlock;
