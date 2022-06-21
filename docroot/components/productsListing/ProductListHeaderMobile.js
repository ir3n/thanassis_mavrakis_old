import { Box, Text, Image } from '@chakra-ui/react';
import BreadCrumb from 'components/common/BreadCrumb';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import MenuSeparator from 'components/common/Header/MenuSeparator';
import Container from 'components/common/Container';

const ProductListHeaderMobile = ({ info, breadcrumbs, isSearchResults, term }) => {
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
                <Box>
                    <BreadCrumb breadcrumbs={isSearchResults ? SEARCH_BREADCRUMB : breadcrumbs} />
                </Box>
                <Box
                    height={'152px'}
                    backgroundColor={color}
                    d="flex"
                    flexDir={'column'}
                    alignItems="center"
                    justifyContent={'center'}
                    pt="48px"
                >
                    <Text textStyle={'h2'} color="white">
                        {isSearchResults ? t('searchResults') : name}
                    </Text>
                    <Text
                        as={'div'}
                        mt="8px"
                        mb="46px"
                        width="324px"
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

export default ProductListHeaderMobile;
