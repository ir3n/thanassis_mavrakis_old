import { Box, Text, Image } from '@chakra-ui/react';
import BreadCrumb from 'components/common/BreadCrumb';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Container from 'components/common/Container';

const ProductListHeader = ({ info, breadcrumbs, isSearchResults, term }) => {
    const router = useRouter();
    const url = info?.image;
    const des = info?.description;
    const name = info?.name;
    const color = info?.backgroundColor;
    const { t } = useTranslation('common');

    function createDescriptionMarkup() {
        return { __html: info?.description };
    }

    function createNameMarkup() {
        return { __html: info?.name };
    }

    const SEARCH_BREADCRUMB = [
        { path: '/', name: 'Home' },
        { path: router.asPath, name: `${t('searchFor')} ${term}` }
    ];

    return (
        <>
            <Box>
                <Box background={'white'}>
                    <BreadCrumb breadcrumbs={isSearchResults ? SEARCH_BREADCRUMB : breadcrumbs} />
                </Box>
                <Box
                    backgroundColor={color}
                    display="flex"
                    flexDir={'column'}
                    alignItems="center"
                    justifyContent={'center'}
                    pt="48px"
                    pb="16px"
                >
                    <Text textStyle={'h1'} color="white">
                        {isSearchResults ? t('searchResults') : name}
                    </Text>

                    <Text
                        as={'div'}
                        mt="16px"
                        mb="46px"
                        width="562px"
                        textAlign={'center'}
                        color="white"
                        textStyle="sm"
                        dangerouslySetInnerHTML={createDescriptionMarkup()}
                    />
                </Box>
            </Box>
        </>
    );
};

export default ProductListHeader;
