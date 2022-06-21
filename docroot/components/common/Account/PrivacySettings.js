import { Box, Text, Link, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';

const PrivacySettings = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <TitleSection title={'information'} />
            <Text mt={'40px'} mb={'60px'}>
                {
                    'Η ιστοσελίδα ενδέχεται να αποθηκεύσει και να επεξεργαστεί προσωπικά δεδομένα. Βάσει του Γενικού Κανονισμού Προσωπικών Δεδομένων (GDPR) έχετε το δικαίωμα να αιτηθείτε την αποστολή όλων των δεδομένων σας που έχουμε αποθηκεύσει, καθώς και να αιτηθείτε τη διαγραφή τους. Για περισσότερες πληροφορίες μπορείτε να ανατρέξετε στους Όρους Χρήσης και την Πολιτική Απορρήτου της ιστοσελίδας.'
                }
            </Text>

            <TitleSection title={'exportData'} />
            <Text mt={'40px'}>
                {
                    'Για την εξαγωγή όλων των προσωπικών δεδομένων που έχουμε καταχωρημένα για το λογαριασμό σας μπορείτε να χρησιμοποιήσετε τον παρακάτω σύνδεσμο.'
                }
            </Text>
            <Box d={'flex'} mt={'20px'} mb={'60px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('save')}
                </Button>
            </Box>

            <TitleSection title={'deleteAccount'} />
            <Text mt={'40px'}>
                {
                    'Λάβετε ιδιαίτερη προσοχή κατά την αίτηση σας για διαγραφή του λογαριασμού καθώς αυτή η ενέργεια είναι μη αντιστρέψιμη.'
                }
            </Text>
            <Box d={'flex'} mt={'20px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('save')}
                </Button>
            </Box>
        </Box>
    );
};

export default PrivacySettings;
