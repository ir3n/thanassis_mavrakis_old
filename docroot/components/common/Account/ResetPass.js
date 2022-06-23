import { Box, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import FormCheckBox from '../Forms/FormCheckBox';
import FormInput from '../Forms/FormInput';

const ResetPass = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <Box mt={'18px'}>
                <Box mb={'18px'}>
                    <FormInput
                        backgroundColor={'white'}
                        color={'black'}
                        label={
                            'Παρακαλώ εισάγετε το email σας παρακάτω για να λάβετε έναν σύνδεσμο επαναφοράς του κωδικού πρόσβασης.'
                        }
                        value={'Διεύθυνση email'}
                        isRequired
                    />
                </Box>
            </Box>

            <Box d={'flex'} alignItems={'flex-end'} mt={'50px'} flexDirection={'column'}>
                <Box w={'50%'}>
                    <Button
                        variant="secondary"
                        size="sm"
                        backgroundColor={'black'}
                        textTransform={'uppercase'}
                        w={'100%'}
                    >
                        {t('save')}
                    </Button>
                    <Box textStyle={'md'}>
                        <FormCheckBox
                            label={"Με την εγγραφή σας αποδέχεστε την Πολιτική Απορρήτου και τους 'Ορους Χρήσης'"}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ResetPass;