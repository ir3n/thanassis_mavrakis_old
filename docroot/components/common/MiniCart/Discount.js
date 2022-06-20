import { Box, Image, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function Discount({ amount_formatted, label, type }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Box d="flex" justifyContent="space-between" alignItems="center" p={{ base: '25px 0', lg: '10px 0' }}>
        <Box d="block">
          {type == 'promotion' ? <Box fontWeight={'bold'}>{t('discount')}</Box> : null}

          <Box as={'p'} fontWeight={'bold'} fontSize="12px">
            {label}
          </Box>
        </Box>
        <Box>
          <Text as={'span'} d="block" fontSize={'18px'} fontWeight={'bold'} paddingBottom={{ base: '8px', lg: '0' }}>
            {amount_formatted}
          </Text>
        </Box>
      </Box>
    </>
  );
}
