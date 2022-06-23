import { Box } from '@chakra-ui/react';
import IconMenu from './IconMenu';

import useTranslation from 'next-translate/useTranslation';
import GlobalSearch from 'components/common/GlobalSearch';

const UserNav = ({ iconMenuShow }) => {
    const { t } = useTranslation('common');
    return (
        <Box
            as={'nav'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            minW={['50px', '50px', '200px']}
        >
            <IconMenu />
        </Box>
    );
};

export default UserNav;
