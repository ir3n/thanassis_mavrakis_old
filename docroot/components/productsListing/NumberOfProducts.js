import { Box } from '@chakra-ui/react';

const NumberOfProducts = ({ productCategoryData, handlePageSize }) => {
    return (
        <Box d="flex" mt="48px" w="144px" justifyContent={'space-between'}>
            <Box>ANA</Box>
            <Box as="button" onClick={() => handlePageSize(24)}>
                24
            </Box>
            <Box as="button" onClick={() => handlePageSize(48)}>
                48
            </Box>
            <Box as="button" onClick={() => handlePageSize(100)}>
                100
            </Box>
        </Box>
    );
};

export default NumberOfProducts;
