import { Box, Text } from '@chakra-ui/react';

const Notification = ({ data }) => {
  function createDescriptionMarkup() {
    return { __html: data };
  }
  return (
    <>
      <Box
        as={'div'}
        d="flex"
        justifyContent="center"
        alignItems="center"
        background={'black'}
        height={'auto'}
        id="jsAmmNotification"
      >
        <Box
          align={'center'}
          fontWeight={'bold'}
          color={'white'}
          fontSize={{ base: '9px', sm: '16px' }}
          dangerouslySetInnerHTML={createDescriptionMarkup()}
        ></Box>
      </Box>
    </>
  );
};

export default Notification;
