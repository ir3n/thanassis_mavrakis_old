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
    useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import Filter from 'components/common/Filter';
import ProductListFilters from './ProductListFilters';
import BreadCrumb from 'components/common/BreadCrumb';
import { getFormattedFilters } from 'utils/helpers';
import useTranslation from 'next-translate/useTranslation';

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
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formattedFilters = selectedFilters ? getFormattedFilters(selectedFilters) : [];
    const { t } = useTranslation('common');

    return (
        <>
            <Box paddingY="30px" width="100%">
                <Box display="flex" w="100%" mb="10px" justifyContent="space-between">
                    <Box>
                        <BreadCrumb route={['Κοσμήματα', 'Δαχτυλίδια']} />
                    </Box>
                </Box>
                <Box
                    display={{ base: 'block', sm: 'flex' }}
                    flexDir={pager?.totalResults === 0 ? 'column' : 'row'}
                    justifyContent={pager?.totalResults === 0 ? 'center' : 'space-between'}
                    pl="11px"
                    mb="10px"
                    alignItems="center"
                >
                    <Box
                        display={{ base: 'inline-block', sm: 'block' }}
                        w={{ base: '100%', sm: 'inherit' }}
                        borderBottom="1px solid grey"
                        paddingBottom="6px"
                    >
                        <Text as="p" fontSize="16px">
                            <Text as="span" fontWeight="bold">
                                {isValidating ? '' : pager?.totalResults}
                            </Text>
                            {t('products')}
                        </Text>
                    </Box>

                    <Box d="flex" justifyContent="space-between">
                        {pager?.totalResults === 0 ? (
                            <Box as={'h3'} fontSize="22px">
                                {t('noResults')}
                            </Box>
                        ) : (
                            <Box>
                                <Menu>
                                    <MenuButton
                                        pl={{ base: '0', sm: '2rem' }}
                                        height="40px"
                                        background="white"
                                        color="black"
                                        fontWeight="normal"
                                        border-radius="5px"
                                        as={Button}
                                        rightIcon={<ChevronDownIcon />}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        {selectedSort ? selectedSort.label : t('choose')}
                                    </MenuButton>
                                    <MenuList>
                                        {sort?.options?.map((i) => {
                                            return (
                                                <MenuItem
                                                    key={i.value}
                                                    onClick={() => {
                                                        setSelectedSort(i);
                                                    }}
                                                >
                                                    {i.label}
                                                </MenuItem>
                                            );
                                        })}
                                    </MenuList>
                                </Menu>
                            </Box>
                        )}

                        {pager?.totalResults === 0 ? (
                            ''
                        ) : (
                            <Box display={{ base: 'inline-block', sm: 'block' }}>
                                <Button variant="secondary" py={'5px'} mt={'10px'} onClick={onOpen} size="xs">
                                    {t('filters')}
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Box>
                {/* <Box display="flex" flexDir="row" mb="10px" overflowX="scroll">
                    {formattedFilters.map((filter, index) => (
                        <Filter filter={filter} key={`selectedFilter-${index}`} handleRemove={handleRemove} />
                    ))}
                </Box> */}
            </Box>
            <ProductListFilters
                facets={facets}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};

export default ProductListSettingsMobile;
