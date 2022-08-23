import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const TitleSection = ({ title }) => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <Box pb={'10px'} borderBottom={'1px solid #919191'}>
                <Text as={'h3'} textStyle={'titleMd'}>
                    {t(title)}
                </Text>
            </Box>
        </Box>
    );
};

export default TitleSection;
