import SearchProduct from './SearchProduct';
import useTranslation from 'next-translate/useTranslation';

import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SearchResults({ results, term, total, closeAndClearResults, onClose }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Box maxH={'300px'} overflowY={'auto'}>
        {results && results.length > 0
          ? results.map(({ category, image, masterSku, price_formatted, product_id, title, url }, index) => {
              return (
                <SearchProduct
                  key={`SearchProduct-${index}`}
                  category={category}
                  image={image}
                  masterSku={masterSku}
                  price={price_formatted}
                  product_id={product_id}
                  title={title}
                  url={url}
                  onClose={() => closeAndClearResults()}
                />
              );
            })
          : null}
      </Box>
      {results && results.length > 0 ? (
        <Box p="10px" bgColor={'brand.900'} cursor={'pointer'}>
          <NextLink href={`/catalogsearch/result/${term}`} passHref  prefetch={false} >
            <Link textAlign={'center'} fontSize={'18px'} color={'white'} width={'100%'} display={'block'} onClick={onClose}>
              {t('allResults')} <Box as="span">({total})</Box>
            </Link>
          </NextLink>
        </Box>
      ) : null}

      {results && results?.length === 0 && (
        <Box p="10px" bgColor={'brand.900'}>
          <Text textAlign={'center'} fontSize={'18px'} color={'white'}>
            {t('noResults')}
          </Text>
        </Box>
      )}
    </>
  );
}
