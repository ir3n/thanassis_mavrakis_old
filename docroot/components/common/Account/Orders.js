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
                            <Th pl={'0'} textStyle={'text'}>
                                {t('order')}
                            </Th>
                            <Th textStyle={'text'}>{t('date')}</Th>
                            <Th textStyle={'text'}>{'Παραλήπτης'}</Th>
                            <Th textStyle={'text'}>{'Σύνολο'}</Th>
                            <Th textStyle={'text'}>{'Κατάσταση'}</Th>
                            <Th textStyle={'text'}>{'Ενέργεια'}</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'text'}>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'text'}>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'text'}>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'text'}>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                        <Tr>
                            <Td pl={'0'} textStyle={'text'}>
                                {'00000002056'}
                            </Td>
                            <Td textStyle={'text'}>{'10/06/2022'}</Td>
                            <Td textStyle={'text'}>{'Joe Doe'}</Td>
                            <Td textStyle={'text'}>
                                {'16,50'}
                                {'€'}
                            </Td>
                            <Td textStyle={'text'}>{'Παραδόθηκε'}</Td>
                            <Td textStyle={'text'}>{'Προβολή'}</Td>
                            <Td textStyle={'text'}>{'Επανάληψη'}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Orders;
