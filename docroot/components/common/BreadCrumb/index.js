import { Box, Text, Link } from '@chakra-ui/react';
import Home from 'components/icons/Home';
import NextLink from 'next/link';

const BreadCrumb = ({ breadcrumbs, white }) => {
  return (
    <Box>
      {breadcrumbs?.map(({ name, path }, index) => {
        return (
          <Box key={`breadcrumb-${index}`} d={'inline-block'}>
            {name === 'Home' || name === 'Αρχική' ? (
              <NextLink href={'/'} passHref prefetch={false}>
                <Link pos="relative" _hover={{ textDecoration: 'none' }}>
                  <Home boxSize="27px" white={white} />
                </Link>
              </NextLink>
            ) : (
              <NextLink href={path || '#'} passHref prefetch={false} locale={false}>
                <Link pos="relative" _hover={{ textDecoration: 'none' }}>
                  <Text
                    as={'span'}
                    key={`BreadCrumb-${index}`}
                    fontSize="15px"
                    fontWeight={breadcrumbs.length - 1 === index ? 'bold' : 'normal'}
                  >
                    / {name}
                  </Text>
                </Link>
              </NextLink>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default BreadCrumb;
