import { AlertTitle, position, Tab, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const TabItem = ({ label, title, url, link, thisPath }) => {
  const itemUrl = url?.substr(url.lastIndexOf('/') + 1);

  return (
    <>
      {link ? (
        thisPath == itemUrl ? (
          <Tab
            _selected={{ color: 'black', borderColor: 'none' }}
            pos="relative"
            _focus={{ boxShadow: 'none' }}
            // _hover={{ _after: { top: '7px', opacity: 1 }, _before: { bottom: '4px', opacity: 1 } }}
            color="brand.900"
            _before={{
              content: "''",
              position: 'absolute',
              bottom: '4px',
              w: '95%',
              h: '2px',
              backgroundColor: 'brand.900',
              transition: '0.4s',
              opacity: 1,
            }}
          >
            <NextLink href={url || '#'} passHref prefetch={false}>
              <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                {label}
              </Link>
            </NextLink>
          </Tab>
        ) : (
          <Tab
            _selected={{ color: 'black', borderColor: 'none' }}
            pos="relative"
            _focus={{ boxShadow: 'none' }}
            _hover={{ color: 'brand.900' }}
            color="black"
            p="0"
            m="10px"
          >
            <NextLink href={url || '#'} passHref prefetch={false}>
              <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                {label}
              </Link>
            </NextLink>
          </Tab>
        )
      ) : (
        <Tab
          _selected={{ _after: { top: '7px', opacity: 1 }, _before: { bottom: '4px', opacity: 1 } }}
          pos="relative"
          _focus={{ boxShadow: 'none' }}
          color="black"
          _hover={{ color: 'brand.900' }}
        >
          {label}
        </Tab>
      )}
    </>
  );
};

export default TabItem;
