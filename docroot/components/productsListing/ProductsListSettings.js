import {
    Box,
    Text,
    Switch,
    FormControl,
    FormLabel,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useTranslation from 'next-translate/useTranslation';

const ProductListSettings = ({ pager, sort, setSelectedSort, selectedSort, isValidating }) => {
    const { t } = useTranslation('common');

    return (
        <>
            <Box
                display={'flex'}
                flexDir={pager?.totalResults === 0 ? 'column' : 'row'}
                justifyContent={pager?.totalResults === 0 ? 'center' : 'space-between'}
                paddingY="30px"
                alignItems="center"
                alignContent="center"
            >
                <Box>
                    <Text as="p" fontSize="16px">
                        <Text as="span" fontWeight="bold">
                            {isValidating ? '' : pager?.totalResults}
                        </Text>{' '}
                        {t('products')}
                    </Text>
                </Box>
                {pager?.totalResults === 0 ? (
                    <Box as={'h3'} fontSize="22px">
                        {t('noResults')}
                    </Box>
                ) : (
                    <Box display="flex" flexDir="row" alignContent="center" alignItems="center">
                        <Box className={'choose_btn'}>
                            {sort ? (
                                <Menu>
                                    <MenuButton
                                        height="40px"
                                        border="1px solid #D6006D"
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
                            ) : null}
                        </Box>
                    </Box>
                )}
            </Box>{' '}
        </>
    );
};

export default ProductListSettings;
