import { Box, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';
import FormInput from '../Forms/FormInput';

const SignOut = () => {
    const { t } = useTranslation('account');

    return (
        <Box py={'60px'} textAlign={'center'}>
            {
                'Σας ευχαριστούμε για την επίσκεψή σας στο Μουσείο Μπενάκη Shop. Θα μεταβείτε στην αρχική μας σελίδα σε λίγα δευτερόλεπτα...'
            }
        </Box>
    );
};

export default SignOut;
