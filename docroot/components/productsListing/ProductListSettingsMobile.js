import React from 'react';
import {
    Box,
    Image,
    Text,
    Switch,
    FormControl,
    FormLabel,
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Checkbox
} from '@chakra-ui/react';
// import Filter from 'components/common/Filter';
import ProductListFilters from './ProductListFilters';
import BreadCrumb from 'components/common/BreadCrumb';
import Filter from 'components/common/Designers/Filter';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { getFormattedFilters } from 'utils/helpers';
import useTranslation from 'next-translate/useTranslation';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react';
import { useRef } from 'react';
import CustomDrawer from 'components/common/CustomDrawer';

const ProductListSettingsMobile = ({
    pager,
    handleRemove,
    handleWornImage,
    facets,
    selectedFilters,
    handleSelectFilter
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
                                <Image src={'/assets/filter.png'} h="14px" w="16px" alt={'filter-icon'} mr="3px" />
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
            />
        </>
    );
};

export default ProductListSettingsMobile;
