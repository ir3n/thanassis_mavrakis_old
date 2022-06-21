import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const TitleSidebar = ({ title }) => {
    const { t } = useTranslation('account');

    return (
        <Box textStyle={'md'} textTransform={'uppercase'} p={'12px 0 18px 0'}>
            {t(title)}
        </Box>
    );
};

export default TitleSidebar;
