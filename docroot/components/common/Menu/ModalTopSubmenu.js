import { Link, ListItem } from '@chakra-ui/react';

const ModalTopSubmenu = ({ itemText }) => {
  return (
    <>
      <ListItem paddingRight={'40px'}>
        <Link
          position={'relative'}
          _hover={{ textDecoration: 'none', _before: { opacity: '1' } }}
          _before={{
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            backgroundColor: '#D6006D',
            bottom: '-13px',
            opacity: '0',
            transition: '.4s',
          }}
        >
          {itemText}
        </Link>
      </ListItem>
    </>
  );
};

export default ModalTopSubmenu;
