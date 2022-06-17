import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { search as apiSearch } from 'services/search';
import Search from 'components/icons/Search';
import useTranslation from 'next-translate/useTranslation';
import Tracking from 'utils/tracking';
import { getRealLocale } from 'utils/helpers';
import { Box, Modal, ModalContent, useDisclosure, ModalOverlay } from '@chakra-ui/react';

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

let TIMER = null;

export default function GlobalSearch() {
    const router = useRouter();
    const { t } = useTranslation('common');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [term, setTerm] = useState('');
    const [results, setResults] = useState();
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onClose();
    }, [router.asPath]);

    const handleSearch = (text) => {
        clearTimeout(TIMER);
        setTerm(text);
        TIMER = setTimeout(() => {
            setLoading(true);
            apiSearch(getRealLocale(router.locale), text)
                .then((res) => {
                    setResults(res.data?.data);
                    setTotal(res?.data?.pager?.totalResults || 0);
                })
                .finally(() => {
                    setLoading(false);
                    const delayDebounceFn = setTimeout(() => {
                        Tracking.searchWithTerm(term);
                    }, 1200);
                    return () => clearTimeout(delayDebounceFn);
                });
        }, 300);
    };

    const closeAndClearResults = () => {
        onClose();
        setResults(null);
    };

    return (
        <>
            <Box cursor={'pointer'} onClick={onOpen} minW={['50px', '50px', '200px']}>
                <Search color={'black'} boxSize={{ base: '1.2rem', sm: '1.2rem', lg: '1rem' }} />
            </Box>

            <Modal isOpen={isOpen} onClose={() => closeAndClearResults()} width={'300px'}>
                <ModalOverlay />
                <ModalContent w={'95%'} maxW={'600px'}>
                    <SearchInput
                        handleSearch={handleSearch}
                        loading={loading}
                        closeAndClearResults={closeAndClearResults}
                    />

                    <SearchResults
                        results={results}
                        term={term}
                        total={total}
                        closeAndClearResults={closeAndClearResults}
                        onClose={onClose}
                    />
                </ModalContent>
            </Modal>
        </>
    );
}
