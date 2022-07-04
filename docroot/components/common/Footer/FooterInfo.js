import { Box, Text, VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function FooterInfo({}) {
    const { t } = useTranslation('footer');

    return (
        <Box as="div" align={{ xl: 'right' }} mt="15px">
            <Box display={{ base: 'flex', xl: 'block' }}>
                <Text
                    as="h4"
                    textStyle="sm"
                    color="grey"
                    py={{ base: '0', xl: '15px' }}
                    w={{ base: '50%', xl: 'auto' }}
                    align={{ xl: 'right' }}
                >
                    CONTACT INFO
                </Text>
                <VStack textStyle="sm" color="lightGrey" spacing="10px" align={{ base: 'start', xl: 'end' }}>
                    <Text>
                        E-shop: <a href="tel:2311815800">2311 815800</a>
                    </Text>
                    <Text>
                        Central offices: <a href="tel:2310689499">2310 689499</a>
                    </Text>
                    <Text>
                        <a href="mailto:info@dustandcream.gr">info@dustandcream.gr</a>
                    </Text>
                </VStack>
            </Box>

            <Box display={{ base: 'flex', xl: 'block' }} mt={{ base: '25px', xl: '0' }} align={{ xl: 'right' }}>
                <Text
                    as="h4"
                    textStyle="sm"
                    color="grey"
                    pb="10px"
                    pt={{ base: '0', xl: '15px' }}
                    w={{ base: '50%', xl: 'auto' }}
                    align={{ xl: 'right' }}
                >
                    OPENING HOURS
                </Text>
                <Text textStyle="sm" color="lightGrey" align={{ xl: 'right' }}>
                    Monday-Friday: 09:00 - 17:00
                </Text>
            </Box>
        </Box>
    );
}
