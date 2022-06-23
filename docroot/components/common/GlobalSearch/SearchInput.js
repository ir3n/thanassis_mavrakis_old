import Search from 'components/icons/Search';
import useTranslation from 'next-translate/useTranslation';

import { Input, InputLeftElement, InputGroup, InputRightElement, Spinner } from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons';

export default function SearchInput({ loading, handleSearch, closeAndClearResults }) {
    const { t } = useTranslation('common');

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                {loading ? (
                    <Spinner color={'white'} size="md" />
                ) : (
                    <Search color={'white'} mt={'5px'} boxSize={'24px '} />
                )}
            </InputLeftElement>
            <Input
                placeholder={t('Search')}
                size="lg"
                variant="ghost"
                // focusBorderColor="pink.400"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <InputRightElement pointerEvents="cursor" onClick={() => closeAndClearResults()}>
                <CloseIcon color={'brand'} mt={'10px'} />
            </InputRightElement>
        </InputGroup>
    );
}
