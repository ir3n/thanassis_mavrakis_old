import { Box, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Filter = ({ filter, handleRemove }) => {
    return (
        <Box
            as="div"
            p="2"
            color={'selectedFilterGrey'}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            textStyle={'caption'}
        >
            <Text fontSize="14px" mr="5px" whiteSpace="nowrap">
                {filter.filter}
            </Text>
            <CloseIcon
                _hover={{ cursor: 'pointer' }}
                onClick={() => {
                    handleRemove(filter);
                }}
                w="2"
                h="2"
                color={'red'}
            />
        </Box>
    );
};

export default Filter;
