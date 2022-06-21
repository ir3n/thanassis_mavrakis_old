import { UnorderedList, ListItem, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const SecureList = () => {
    const { t } = useTranslation('account');

    return (
        <UnorderedList listStyleType={'none'} ml={'0'} pb={'30px'} borderBottom={'1px solid #919191'}>
            <ListItem pb={'4px'}>
                <Link _hover={{ color: 'brand' }}>{t('privacyPolicy')}</Link>
            </ListItem>
            <ListItem pb={'4px'}>
                <Link _hover={{ color: 'brand' }}>{t('payments')}</Link>
            </ListItem>
        </UnorderedList>
    );
};

export default SecureList;
