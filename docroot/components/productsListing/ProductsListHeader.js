import { Box, Text, Image } from '@chakra-ui/react';
import BreadCrumb from 'components/common/BreadCrumb';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const ProductListHeader = ({ info, breadcrumbs, isSearchResults, term }) => {
  const router = useRouter();
  const url = info?.image;
  const des = info?.description;
  const name = info?.name;
  const { t } = useTranslation('common');

  function createDescriptionMarkup() {
    return { __html: info?.description };
  }

  function createNameMarkup() {
    return { __html: info?.name };
  }

  const SEARCH_BREADCRUMB = [
    { path: '/', name: 'Home' },
    { path: router.asPath, name: `${t('searchFor')} ${term}` },
  ];

  return (
    <>
      {url && des ? (
        <Box borderBottom="1px solid #D9D9D9;">
          <Box as="div" h="365px" w="100%" background={'#EEEEEE'} pos="relative" mb="40px">
            <Box zIndex="2" pos="absolute" top="2" ml="36px">
              <BreadCrumb breadcrumbs={breadcrumbs} />
            </Box>

            <Image
              zIndex="1"
              pos="absolute"
              right="0"
              src={info?.image}
              width={'100%'}
              height={'100%'}
              objectFit={'cover'}
              alt={info?.name}
              mt="40px"
            />
          </Box>
          <Box textAlign="center" fontSize={['26px', '26px', '30px', '30px']} py={{ base: '8px', lg: '18px' }}>
            <Text as="h2" fontSize="36px" lineHeight="45px">
              {isSearchResults ? t('searchResults') : info?.name}
            </Text>
            <Text as={'div'} dangerouslySetInnerHTML={createDescriptionMarkup()} />
          </Box>
        </Box>
      ) : des ? (
        <Box display={'flex'} flexDir="column" mt="50px" mb="28px" borderY="1px solid #D9D9D9;" pos="relative">
          <Box zIndex="2" pos="absolute" top="-30px" ml="36px">
            <BreadCrumb breadcrumbs={breadcrumbs} />
          </Box>
          <Box justifyContent="center" textAlign="center" fontSize="30px" padding="20px 0">
            <Text as={'div'} dangerouslySetInnerHTML={createDescriptionMarkup()} />
          </Box>
        </Box>
      ) : name || isSearchResults ? (
        <Box display={'flex'} flexDir="column" mt="50px" mb="28px" borderY="1px solid #D9D9D9;" pos="relative">
          <Box zIndex="2" pos="absolute" top="-30px" ml="36px">
            <BreadCrumb breadcrumbs={isSearchResults ? SEARCH_BREADCRUMB : breadcrumbs} />
          </Box>
          <Box justifyContent="center" textAlign="center" fontSize="30px" padding="20px 0">
            {isSearchResults ? (
              <Text as={'div'}>{t('search')}</Text>
            ) : (
              <Text as={'div'} dangerouslySetInnerHTML={createNameMarkup()} />
            )}
          </Box>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default ProductListHeader;
