import {
    Box,
    Button,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Drawer,
    useBreakpointValue,
    Text
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import ProductListAccordion from './ProductListAccordion';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import SelectedFilters from './SelectedFilters';
const ProductListFilters = ({
    facets,
    selectedFilters,
    handleSelectFilter,
    handleRemove,
    isOpen,
    onClose,
    isMobile
}) => {
    const { t } = useTranslation('common');

    const filterSelected = useBreakpointValue({
        base: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        sm: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        md: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        lg: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        xl: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />
    });

    return (
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        textStyle={'caprion'}
                        color={'lightGrey'}
                        pos="absolute"
                        top="0"
                        right="0"
                    >
                        <Text>{'Close'}</Text>
                        <CloseIcon
                            _hover={{ cursor: 'pointer' }}
                            onClick={onClose}
                            w="35px"
                            h="35px"
                            p="12px"
                            color="lightGrey"
                            borderRadius="5px"
                        />
                    </Box>
                    <DrawerHeader pb={'0'} pt={'30px'}>
                        <SelectedFilters
                            selectedFilters={selectedFilters}
                            handleRemove={handleRemove}
                            isMobile={true}
                        />
                    </DrawerHeader>

                    <DrawerBody>
                        <Box w="100%" h="100%" pos="relative" borderTop={'1px solid #C4C4C4'}>
                            <Box maxH="100%">
                                <ProductListAccordion
                                    facets={facets}
                                    selectedFilters={selectedFilters}
                                    handleSelectFilter={handleSelectFilter}
                                    toggleButton={onClose}
                                    isMobile
                                />
                            </Box>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            backgroundColor="white"
                            border={'1px solid #000000'}
                            m={'auto'}
                            onClick={onClose}
                            w="90%"
                        >
                            {'Καθαρισμός όλων'}
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
export default ProductListFilters;
