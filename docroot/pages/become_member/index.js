import { Box, Text, Image } from '@chakra-ui/react';

import useTranslation from 'next-translate/useTranslation';
import CardMember from './cardMember';

const BecomeMember = () => {
    const { t } = useTranslation('member');

    return (
        <>
            <Box display="flex" justifyContent={'center'} background={'#D13A3A'}>
                <Text as={'h1'} py="48px" color={'white'} textStyle="titleMd">
                    {t('member')}
                </Text>
            </Box>
            <Box mt="56px" display="flex" justifyContent={'center'}>
                <Text textAlign={'start'} width={'745px'} fontSize="14px" lineHeight={'24px'}>
                    Σας προσκαλούμε να γίνετε μέρος μιας συναρπαστικής αφήγησης 8.000 χρόνων ιστορίας που επεκτείνεται
                    σε 7 Μουσεία, 4 Αρχεία και 2 επισκέψιμους χώρους και εξελίσσεται σε περισσότερα από 120.000 έργα
                    τέχνης αντικείμενα από όλο το φάσμα της Ελληνικής τέχνης και πολιτισμού, από την προϊστορική περίοδο
                    έως τη σύγχρονη εποχή. Με συλλογές και έργα Ευρωπαϊκής, Ισλαμικής, Προκολομβιανής, Αφρικανικής,
                    Κινεζικής και Ασιατικής τέχνης. Σας προσκαλούμε να επισκεφτείτε περισσότερες από 30 περιοδικές
                    εκθέσεις το χρόνο και να συμμετέχετε σε πάνω από 450 εκδηλώσεις. Σας προσκαλούμε να γίνετε Μέλος του
                    Μουσείου Μπενάκη! Του Μουσείου που αφηγείται τον Ελληνικό Πολιτισμό, ερμηνεύοντας τις αναρίθμητες
                    καλλιτεχνικές και πνευματικές του όψεις, τοποθετώντας τον σε έναν συνεχή διάλογο με τους πολιτισμούς
                    του κόσμου. Το Πρόγραμμα Μελών στηρίζει το Μουσείο Μπενάκη και παρέχει απεριόριστες δωρεάν
                    επισκέψεις, μοναδικά προνόμια και ειδικά σχεδιασμένες εμπειρίες από €5 ευρώ το μήνα.
                </Text>
            </Box>
            <Box mt="56px">
                <CardMember
                    color="blue"
                    image={'/assets/dummyBanner.png'}
                    text="member"
                    link="check privilages"
                    price="60$"
                />
            </Box>
            <Box mt="24px">
                <CardMember
                    color="darkYellow"
                    text="member"
                    link="check privilages"
                    price="60$"
                    image={'/assets/dummyBanner.png'}
                />
            </Box>
            <Box mt="24px">
                <CardMember
                    text="member"
                    link="check privilages"
                    price="60$"
                    color="brightRed"
                    image={'/assets/dummyBanner.png'}
                />
            </Box>
            <Box display="flex" justifyContent={'center'} mt="56px">
                <Image src="/assets/Frame.png" />
            </Box>
            <Box display="flex" justifyContent={'center'} mt="1rem">
                <Text textStyle={'titleMd'} color="black">
                    Benaki Contemporaries
                </Text>
            </Box>
            <Box display="flex" justifyContent={'center'} mt="1rem">
                <Text textStyle={'text'} width="744px" color="black" textAlign={'center'}>
                    Το πρόγραμμα του Μουσείου, Benaki Contemporaries, έχει ως στόχο να βοηθήσει το εκθεσιακό πρόγραμμα
                    του Μουσείου στηρίζοντας τις εκθέσεις σύγχρονης τέχνης.
                </Text>
            </Box>
            <Box mt="56px">
                <CardMember
                    text="member"
                    link="check privilages"
                    price="60$"
                    color="brightRed"
                    image={'/assets/dummyBanner.png'}
                />
            </Box>
            <Box mt="24px" mb="80px">
                <CardMember
                    text="member"
                    link="check privilages"
                    price="60$"
                    color="brightRed"
                    image={'/assets/dummyBanner.png'}
                />
            </Box>
        </>
    );
};

export default BecomeMember;
