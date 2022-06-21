import React from 'react';
import {
    Box,
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
import AddIcon from '../../public/assets/cross-strong-small.svg';
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
    sort,
    setSelectedSort,
    handleRemove,
    facets,
    selectedFilters,
    handleSelectFilter,
    isValidating,
    selectedSort
}) => {
    const formattedFilters = selectedFilters ? getFormattedFilters(selectedFilters) : [];
    const { t } = useTranslation('product');

    return (
        <>
            <Box d={'flex'} justifyContent="space-between" mx="18px">
                <CustomDrawer
                    drawerButtonText={t('filter')}
                    drawerHeader={'FILTER BY'}
                    facets={facets}
                    sort={sort}
                    second={false}
                    borderRight={'0.2px solid black'}
                    width="162px"
                />
                <CustomDrawer
                    drawerButtonText={t('sort')}
                    drawerHeader={t('sort')}
                    facets={facets}
                    sort={sort}
                    second={true}
                    setSelectedSort={setSelectedSort}
                    width="150px"
                />
            </Box>
        </>
    );
};

export default ProductListSettingsMobile;
