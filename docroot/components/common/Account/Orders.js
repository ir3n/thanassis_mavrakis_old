import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const Orders = () => {
    const { t } = useTranslation('account');

    return (
        <Box mt={'30px'}>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th pl={'0'} textStyle={'md'}>
                                {t('order')}
                            </Th>
                            <Th textStyle={'md'}>{t('date')}</Th>
                            <Th textStyle={'md'}>{'Παραλήπτης'}</Th>
                            <Th textStyle={'md'}>{'Σύνολο'}</Th>
                            <Th textStyle={'md'}>{'Κατάσταση'}</Th>
                            <Th textStyle={'md'}>{'Ενέργεια'}</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'md'}>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'md'}>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'md'}>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'md'}>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'md'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'md'}>{'10/06/2022'}</Td>
                            <Td textStyle={'md'}>{'Joe Doe'}</Td>
                            <Td textStyle={'md'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'md'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'md'}>{'Προβολή'}</Td>
                            <Td textStyle={'md'}>{'Επανάληψη'}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Orders;
