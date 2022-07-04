import { Box, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';
import FormInput from '../Forms/FormInput';

const Addresses = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <TitleSection title={'contactInfo'} />
            <Box mb={'60px'} mt={'18px'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Όνομα'} />
                    </Box>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Επώνυμο'} />
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Εταιρία'} />
                    </Box>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Αριθμός τηλεφώνου'} />
                    </Box>
                </Box>
            </Box>

            <TitleSection title={'address'} />
            <Box mb={'60px'} mt={'18px'}>
                <Box mb={'18px'}>
                    <FormInput backgroundColor={'white'} color={'black'} value={'Διεύθυνση'} />
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Πόλη'} />
                    </Box>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Νομός/Επαρχία'} />
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'ΤΚ'} />
                    </Box>
                    <Box w={'48%'} mb={'18px'}>
                        <FormInput backgroundColor={'white'} color={'black'} value={'Χώρα'} />
                    </Box>
                </Box>
            </Box>

            <TitleSection title={'moreInfo'} />
            <Box mt={'18px'}>
                <Box mb={'18px'}>
                    <FormInput backgroundColor={'white'} color={'black'} value={'Τηλέφωνο'} />
                </Box>
                <Box mb={'18px'}>
                    <FormInput backgroundColor={'white'} color={'black'} value={'Είδος παραστατικού'} />
                </Box>
            </Box>

            <Box display={'flex'} justifyContent={'end'} mt={'50px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('save')}
                </Button>
            </Box>
        </Box>
    );
};

export default Addresses;
