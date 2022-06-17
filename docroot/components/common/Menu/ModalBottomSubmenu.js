import { Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const ModalBottomSubmenu = ({ title, relative }) => {
  return (
    <>
      <ListItem paddingRight={'40px'}>
        <NextLink passHref href={relative}  prefetch={false}>
          <Link _hover={{ color: 'brand.900' }}>{title}</Link>
        </NextLink>
      </ListItem>
    </>
  );
};

export default ModalBottomSubmenu;
