import {
    Box,
    Button,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Drawer,
    useBreakpointValue
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import ProductListAccordion from './ProductListAccordion';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import SelectedFilters from './SelectedFilters';
const ProductListFilters = ({ facets, selectedFilters, handleSelectFilter, handleRemove, isOpen, onClose }) => {
    const { t } = useTranslation('common');

    const filterSelected = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />,
        xl: <SelectedFilters selectedFilters={selectedFilters} handleRemove={handleRemove} />
    });

    return (
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <CloseIcon
                        _hover={{ cursor: 'pointer' }}
                        onClick={onClose}
                        backgroundColor="black"
                        pos="absolute"
                        top="0"
                        left="-45px"
                        w="45px"
                        h="45px"
                        p="12px"
                        color="white"
                        borderRadius="5px"
                    />
                    <DrawerHeader>
                        {t('filters')}
                        {filterSelected}
                    </DrawerHeader>

                    <DrawerBody>
                        <Box w="100%" h="100%" pos="relative">
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
                        <Button backgroundColor="black" onClick={onClose} w="90%">
                            {t('showProducts')}
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
export default ProductListFilters;
