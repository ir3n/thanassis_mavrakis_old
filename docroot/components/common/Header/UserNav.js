import { Box } from '@chakra-ui/react';
import IconMenu from './IconMenu';

import useTranslation from 'next-translate/useTranslation';

const UserNav = () => {
    const { t } = useTranslation('common');
    return (
        <Box as="nav" display="flex" alignItems="center" justifyContent="end">
            <IconMenu />
        </Box>
    );
};

export default UserNav;
