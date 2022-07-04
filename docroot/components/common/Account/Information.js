import { Box, Button, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';
import FormInput from '../Forms/FormInput';

const Information = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <TitleSection title={'information'} />
            <Box mb={'60px'} mt={'18px'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'John'} />
                    </Box>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Doe'} />
                    </Box>
                </Box>
                <Box w={'48%'}>
                    <FormInput backgroundColor={'white'} color={'black'} value={'johndoe@gmail.com'} />
                </Box>
            </Box>

            <TitleSection title={'changePassword'} />
            <Box mt={'18px'}>
                <Box mb={'18px'}>
                    <FormInput
                        label={'5 – 20 χαρακτήρες'}
                        backgroundColor={'white'}
                        color={'black'}
                        value={'Τρέχον κωδικός πρόσβασης'}
                    />
                </Box>
                <Box mb={'18px'}>
                    <FormInput
                        label={'5 – 20 χαρακτήρες'}
                        backgroundColor={'white'}
                        color={'black'}
                        value={'Κωδικός πρόσβασης'}
                    />
                </Box>
                <Box>
                    <FormInput
                        label={'Ισχύς Κωδικού Πρόσβασης: Πολύ Ισχυρός'}
                        backgroundColor={'white'}
                        color={'black'}
                        value={'Επιβεβαίωση κωδικού'}
                    />
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'end'} mt={'50px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('confirmation')}
                </Button>
            </Box>
        </Box>
    );
};

export default Information;
