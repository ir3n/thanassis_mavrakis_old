import {
  Box,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader, DrawerBody, DrawerFooter, Drawer
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import ProductListAccordion from './ProductListAccordion';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
const ProductListFilters = ({  facets, selectedFilters, handleSelectFilter, isOpen, onClose }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
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
          <DrawerHeader>{t('filters')}</DrawerHeader>

          <DrawerBody>
            <Box w="100%" h="100%" pos="relative">
                <Box maxH="100%" >
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
            <Button backgroundColor="black" onClick={onClose}  w="90%" >
              {t('showProducts')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ProductListFilters;
