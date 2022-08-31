import React from 'react';
import { Box, Image, Button, useDisclosure } from '@chakra-ui/react';
import ProductListFilters from './ProductListFilters';
import { getFormattedFilters } from 'utils/helpers';
import useTranslation from 'next-translate/useTranslation';

const ProductListSettingsMobile = ({
    pager,
    handleRemove,
    handleWornImage,
    facets,
    selectedFilters,
    handleSelectFilter,
    isValidating,
    isMobile
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formattedFilters = selectedFilters ? getFormattedFilters(selectedFilters) : [];
    const { t } = useTranslation('common');

    return (
        <>
            <Box width="100%" display={'flex'} alignItems={'center'}>
                <Box
                    display={{ base: 'block', sm: 'flex' }}
                    flexDir={pager?.totalResults === 0 ? 'column' : 'row'}
                    justifyContent={pager?.totalResults === 0 ? 'center' : 'space-between'}
                    alignItems="center"
                >
                    <Box d="flex" justifyContent="space-between">
                        {pager?.totalResults === 0 ? (
                            ''
                        ) : (
                            <Box display={'flex'} alignItems={'center'}>
                                <Box pos={'relative'}>
                                    <Image src={'/assets/filter.png'} h="14px" w="16px" alt={'filter-icon'} mr="3px" />
                                    <Box
                                        pos={'absolute'}
                                        top={'-20px'}
                                        right={'-15px'}
                                        as="span"
                                        fontSize={'9px'}
                                        backgroundColor={'red'}
                                        borderRadius={'50%'}
                                        color={'white'}
                                        padding={'4px 8px'}
                                    >
                                        {isValidating ? '' : pager?.totalResults}
                                    </Box>
                                </Box>
                                <Button
                                    variant="secondary"
                                    py={'5px'}
                                    onClick={onOpen}
                                    size="xs"
                                    color={'lightGrey'}
                                    textStyle={'caption'}
                                >
                                    {'Φίλτρα'}
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Box>{' '}
            </Box>{' '}
            <ProductListFilters
                facets={facets}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
                handleRemove={handleRemove}
                isOpen={isOpen}
                onClose={onClose}
                isMobile={isMobile}
            />
        </>
    );
};

export default ProductListSettingsMobile;
