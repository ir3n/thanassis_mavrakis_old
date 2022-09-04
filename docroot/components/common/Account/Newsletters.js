import { Box, Text, Checkbox, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';
import FormInput from '../Forms/FormInput';

const Newsletters = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <TitleSection title={'newsletterOptions'} />
            <Box mt={'40px'}>
                <Checkbox>{'Benaki Museum Newsletter'}</Checkbox>
            </Box>
            <Box display={'flex'} mt={'20px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('save')}
                </Button>
            </Box>
        </Box>
    );
};

export default Newsletters;
