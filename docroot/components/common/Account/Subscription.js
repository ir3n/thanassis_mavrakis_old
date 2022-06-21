import { Box, Text, Button, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';

const Subscription = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <TitleSection title={'subscriptionPackage'} />
            <Text mt={'20px'} textTransform={'uppercase'}>
                {t('members')}
            </Text>
            <Box d={'flex'} mt={'5px'} mb={'20px'}>
                <Text mr={'20px'} textTransform={'uppercase'}>
                    {t('expirationDate')}
                    {':'}
                </Text>
                <Text>{'1 Μαΐου 2023'}</Text>
            </Box>

            <Box d={'flex'} mt={'20px'} mb={'60px'}>
                <Button variant="secondary" size="sm" backgroundColor={'black'} textTransform={'uppercase'}>
                    {t('subscriptionRenewal')}
                </Button>
            </Box>

            <TitleSection title={'paymentHistory'} />
            <Text mt={'40px'}>
                {
                    'Για την εξαγωγή όλων των προσωπικών δεδομένων που έχουμε καταχωρημένα για το λογαριασμό σας μπορείτε να χρησιμοποιήσετε τον παρακάτω σύνδεσμο.'
                }
            </Text>
            <Box mt={'30px'}>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th pl={'0'}>{t('date')}</Th>
                                <Th>{t('package')}</Th>
                                <Th>{t('ammount')}</Th>
                                <Th pr={'0'} textAlign={'right'}>
                                    {t('duration')}
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td pl={'0'}>{'12/03/21'}</Td>
                                <Td>{'2'}</Td>
                                <Td>
                                    {'30'}
                                    {'€'}
                                </Td>
                                <Td pr={'0'} textAlign={'right'}>
                                    {'2'}
                                    {' μήνες'}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td pl={'0'}>{'12/03/21'}</Td>
                                <Td>{'2'}</Td>
                                <Td>
                                    {'30'}
                                    {'€'}
                                </Td>
                                <Td pr={'0'} textAlign={'right'}>
                                    {'2'}
                                    {' μήνες'}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Subscription;
