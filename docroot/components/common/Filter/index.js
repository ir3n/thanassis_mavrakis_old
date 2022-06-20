import { Box, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Filter = ({ filter, handleRemove }) => {
  return (
    <Box
      as="div"
      p="2"
      marginX="8px"
      border={'1px solid #C4C4C4'}
      borderRadius="5px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="4px"
    >
      <Text fontSize="14px" mr="25px" whiteSpace="nowrap">
        {filter.filter}
      </Text>
      <CloseIcon
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          handleRemove(filter);
        }}
        w="3"
        h="3"
      />
    </Box>
  );
};

export default Filter;
