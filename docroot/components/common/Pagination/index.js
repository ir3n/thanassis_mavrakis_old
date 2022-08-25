import { Box, Button } from '@chakra-ui/react';
import ArrowLeft from '../../../public/assets/arrowleft-light.svg';
import ArrowRight from '../../../public/assets/arrowright-light.svg';

import _ from 'lodash';

export default function Pagination({ first, last, totalPages, currentpage, onChange }) {
    const MAX_NUMBER_OF_PAGES = 3;

    const startingPage = 0;
    const endingPage = totalPages - 1;

    const startingIndex =
        currentpage + 1 <= MAX_NUMBER_OF_PAGES
            ? 1
            : currentpage + 1 >= endingPage - MAX_NUMBER_OF_PAGES
            ? currentpage - 1
            : currentpage - 1;
    const endingIndex =
        currentpage + 1 <= MAX_NUMBER_OF_PAGES
            ? currentpage + 1
            : currentpage + 1 > totalPages - MAX_NUMBER_OF_PAGES
            ? endingPage - 1
            : currentpage + 1;

    console.log('totalPages ', totalPages);

    return (
        <Box my={'20px'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'row'}>
            {!first ? (
                <Box
                    onClick={() => {
                        onChange(currentpage - 1);
                    }}
                    cursor="pointer"
                    mr="24px"
                >
                    <ArrowLeft />
                </Box>
            ) : null}

            <Button
                borderRadius={'50%'}
                border={startingPage === currentpage ? '1px solid black' : 'none'}
                key={`Pagination-${startingPage}`}
                onClick={() => onChange(startingPage)}
                w={'32px'}
                h="32px"
                bg="white"
                m={'0 4px'}
                minWidth={'auto'}
            >
                {startingPage + 1}
            </Button>

            {currentpage + 1 > MAX_NUMBER_OF_PAGES && '...'}

            {totalPages > 2 && (
                <Box>
                    {_.range(startingIndex, endingIndex + 1).map((index) => {
                        return (
                            <Button
                                borderRadius={'50%'}
                                border={index === currentpage ? '1px solid black' : 'none'}
                                key={`Pagination-${index}`}
                                onClick={() => onChange(index)}
                                w={'32px'}
                                h="32px"
                                bg="white"
                                m={'0 4px'}
                                minWidth={'auto'}
                            >
                                {index + 1}
                            </Button>
                        );
                    })}
                </Box>
            )}

            {totalPages - currentpage > MAX_NUMBER_OF_PAGES && '...'}

            <Button
                borderRadius={'50%'}
                key={`Pagination-${endingPage}`}
                onClick={() => onChange(endingPage)}
                w={'32px'}
                h="32px"
                bg="white"
                m={'0 5px'}
                minWidth={'auto'}
            >
                {endingPage + 1}
            </Button>

            {!last ? (
                <Box
                    onClick={() => {
                        onChange(currentpage + 1);
                    }}
                    cursor="pointer"
                    ml="24px"
                >
                    <ArrowRight />
                </Box>
            ) : null}
        </Box>
    );
}
