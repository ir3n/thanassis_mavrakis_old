import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Container from 'components/common/Container';
import PageTitleImg from 'components/common/PageTitleImg';

export default function DesignersSingle() {
    const { t } = useTranslation('cart');
    const router = useRouter();

    return (
        <>
            <Box>
                <PageTitleImg image={'/assets/designers-single-hero.jpg'} />
                <Container>
                    <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }} py={'65px'}>
                        <Box w={{ sm: '100%', lg: '40%' }} pb={{ sm: '18px', lg: '0' }}>
                            <Box as={'h2'} textStyle={'h2'}>
                                {'157+173 designers'}
                            </Box>
                            <Text textStyle={'sm'}>{'Σχετικά προϊόντα'}</Text>
                        </Box>
                        <Box w={{ sm: '100%', lg: '60%' }}>
                            <Text textStyle={'md'} lineHeight={'24px'}>
                                {
                                    'Οι 157+173 designers είναι ένα design studio που δημιουργήθηκε από τους Μπάμπη Παπανικολάου και Χριστίνα Τσιραγγέλου, στη Θεσσαλονίκη, το φθινόπωρο του 2009. Οι 157+173 designers κατασκευάζουν προϊόντα ιδιαίτερης αισθητικής και ποιότητας, με διάθεση για πειραματισμό με ποικίλλα υλικά, μορφές και τρόπους κατασκευής. Οι ιδέες δοκιμάζονται, εξελίσσονται, επανασχεδιάζονται και μετατρέπονται σε αληθινά αντικείμενα, με την τοπική βιομηχανία ως μέσo παραγωγής και ταυτόχρονα τη φροντίδα χειροποίητων αντικειμένων, καθώς το μοντάρισμα, βάψιμο και φινίρισμα, γίνεται απο τους ίδιους, στο studio τους. Τα προϊόντα τους είναι λιτά και χρηστικά, με έξυπνο σχεδιασμό ώστε να είναι συμβατά με την εποχή και προσιτά στο κοινό. Πρόκειται τόσο για αντικείμενα ευρείας παραγωγής όσο και για προϊόντα ειδικής παραγγελίας, σε περιορισμένα ή και μοναδικά αντίτυπα. Συμμετέχουν με τη δουλειά τους σε εμπορικές και προωθητικές εκθέσεις design, τόσο στην Ελλάδα όσο και στην Ευρώπη. Παράλληλα με το σχεδιασμό προϊόντων, λαμβάνουν μέρος σε εκθέσεις, με καλλιτεχνικά έργα και εγκαταστάσεις. Συμμετέχουν σε σχετικά με το σχεδιασμό εργαστήρια, καθώς και λαμβάνουν μέρος σε διαγωνισμούς αρχιτεκτονικής και σχεδιασμού προϊόντων. Το έργο τους, έχει παρουσιαστεί μέσα από ένα σημαντικό κατάλογο εθνικών και διεθνών εφημερίδων, περιοδικών και τεύχη design, καθώς και σε εκπαιδευτικά ιδρύματα.'
                                }
                            </Text>
                        </Box>
                    </Box>

                    {/* Here, we have to add the carousel of the designer's products */}
                </Container>
            </Box>
        </>
    );
}
