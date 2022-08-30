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
    MenuItem,
    Checkbox,
    CheckboxGroup
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import AddIcon from '../../public/assets/cross-strong-small.svg';
import useTranslation from 'next-translate/useTranslation';
import { useState, useRef } from 'react';
import { useOutsideClick } from '@chakra-ui/react';
import Container from 'components/common/Container';

const ProductListSettings = ({ pager, sort, setSelectedSort, selectedSort, isValidating, facets }) => {
    const { t } = useTranslation('product');
    const [selectedFacet, setSelectedFacet] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef();

    useOutsideClick({
        ref: ref,
        handler: () => setIsModalOpen(false)
    });

    const handleFacetTrigger = (facetId) => {
        setSelectedFacet(facetId);
    };

    return (
        <>
            <Container>
                <Box
                    display={'flex'}
                    flexDir={pager?.totalResults === 0 ? 'column' : 'row'}
                    justifyContent={pager?.totalResults === 0 ? 'center' : 'space-between'}
                    alignContent="center"
                    alignItems="center"
                    ref={ref}
                    className="product-list-settings"
                    height={'64px'}
                >
                    <Box display="flex">
                        {facets?.map((item) => {
                            return (
                                <>
                                    <Box
                                        display="flex"
                                        w="168px"
                                        height={'32px'}
                                        onClick={() => {
                                            handleFacetTrigger(item.facet);
                                            setIsModalOpen(true);
                                        }}
                                        paddingRight="18px"
                                        cursor={'pointer'}
                                        justifyContent={'space-between'}
                                        paddingLeft={'1rem'}
                                        position={'relative'}
                                        textStyle="sm"
                                        alignItems={'center'}
                                    >
                                        {item.name}
                                        <Box display="flex" alignItems={'center'}>
                                            <AddIcon />
                                            <Box ml="18px" h="32px" w="0.2px" background={'black'} />
                                        </Box>

                                        {isModalOpen && (
                                            <Box
                                                position="absolute"
                                                top="45px"
                                                zIndex={10}
                                                background="white"
                                                mt="10px"
                                                overflowY={'auto'}
                                                maxH="324px"
                                                boxShadow=" 0.5px 0.5px 0.5px grey"
                                                width="210px"
                                            >
                                                {selectedFacet === item.facet &&
                                                    item?.filters?.map((filter) => {
                                                        return (
                                                            <Box
                                                                key={item.filter_transliterated}
                                                                mb={'1rem'}
                                                                mt="18px"
                                                                width="fit-content"
                                                            >
                                                                <Checkbox ml="1rem">
                                                                    <Text
                                                                        textAlign={'start'}
                                                                        textStyle={'sm'}
                                                                        ml="12px"
                                                                    >
                                                                        {filter.filter}
                                                                    </Text>
                                                                </Checkbox>
                                                            </Box>
                                                        );
                                                    })}
                                            </Box>
                                        )}
                                    </Box>
                                </>
                            );
                        })}
                    </Box>
                    <Box display="flex" flexDir="row" alignContent="center" alignItems="center">
                        <Box h="32px" mr="24px" w="0.2px" background={'black'} />
                        <Box className={'choose_btn'}>
                            {
                                <Menu>
                                    <MenuButton
                                        h="32px"
                                        w="145px"
                                        pl={0}
                                        pr={0}
                                        py={0}
                                        background="white"
                                        _focus={{}}
                                        _active={'none'}
                                        color="black"
                                        fontWeight="normal"
                                        // borderLeft={'0.2px solid black'}
                                        as={Button}
                                        rightIcon={<ChevronDownIcon />}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        <Text mr="16px" textStyle={'sm'} textTransform="uppercase">
                                            {selectedSort ? selectedSort.label : t('sort')}
                                        </Text>
                                    </MenuButton>
                                    <MenuList>
                                        {sort?.options?.map((i) => {
                                            return (
                                                <MenuItem
                                                    key={i.value}
                                                    onClick={() => {
                                                        setSelectedSort(i);
                                                        console.log(selectedSort, 'selectedSort');
                                                    }}
                                                >
                                                    {i.label}
                                                </MenuItem>
                                            );
                                        })}
                                    </MenuList>
                                </Menu>
                            }
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default ProductListSettings;
