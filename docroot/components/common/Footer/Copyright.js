import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function Copyright({}) {
    const { t } = useTranslation('footer');

    return (
        <Box color="grey">
            <Box as="p" textStyle="note">
                © {new Date().getFullYear()}
            </Box>
        </Box>
    );
}
