import { Box, Text, VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function FooterInfo({}) {
    const { t } = useTranslation('footer');

    return (
        <Box as="div" align="right" marginTop="15px">
            <Text as="h4" textStyle="sm" color="grey" paddingY={'15px'}>
                CONTACT INFO
            </Text>
            <VStack textStyle="sm" color="lightGrey" spacing="10px" align="right">
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
            <Text as="h4" textStyle="sm" color="grey" paddingBottom="10px" paddingTop="15px">
                OPENING HOURS
            </Text>
            <Text textStyle="sm" color="lightGrey">
                Monday-Friday: 09:00 - 17:00
            </Text>
        </Box>
    );
}
