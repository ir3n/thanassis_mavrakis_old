import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useDisclosure,
    Checkbox,
    Button,
    Text
} from '@chakra-ui/react';
import AddIcon from '../../../public/assets/cross-strong-small.svg';
import { useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const CustomDrawer = ({
    drawerButtonText,
    drawerHeader,
    facets,
    sort,
    second,
    setSelectedSort,
    borderRight,
    width
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const { t } = useTranslation('product');
    return (
        <Box width={width}>
            <Box display="flex" alignItems={'center'} height={'42px'} justifyContent="space-between">
                <Box
                    borderRight={borderRight}
                    ref={btnRef}
                    onClick={onOpen}
                    display="flex"
                    alignItems={'center'}
                    width="149px"
                >
                    <Text textStyle={'caption'} textTransform="uppercase" width={'92px'}>
                        {drawerButtonText}
                    </Text>
                    <Box pl="50px" pr="12px" width={'fit-content'} height="fit-content">
                        <AddIcon />
                    </Box>
                </Box>
                <Drawer
                    className="drawerMenuFilter"
                    size="md"
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton _focus={{}} />
                        <DrawerHeader>
                            <Text textStyle={'sm'} fontWeight="bold">
                                {drawerHeader}
                            </Text>
                        </DrawerHeader>
                        <Box display={'block'} overflowY="auto">
                            {!second ? (
                                facets?.map((item) => {
                                    return (
                                        <DrawerBody key={item.facet} boxShadow={'15px 0px 10px -15px rgba(0,0,0,0.63)'}>
                                            <Box padding={0} textStyle={'sm'} fontWeight="bold">
                                                {item.name}
                                            </Box>
                                            {item?.filters?.map((filter) => {
                                                return (
                                                    <Box
                                                        key={item.filter_transliterated}
                                                        overflowY={'hidden'}
                                                        mb={'1rem'}
                                                        mt="18px"
                                                        width="fit-content"
                                                    >
                                                        <Checkbox ml="1rem" _focus={{}}>
                                                            <Text textAlign={'start'} textStyle={'sm'} ml="12px">
                                                                {filter.filter}
                                                            </Text>
                                                        </Checkbox>
                                                    </Box>
                                                );
                                            })}
                                        </DrawerBody>
                                    );
                                })
                            ) : (
                                <DrawerBody boxShadow={'15px 0px 10px -15px rgba(0,0,0,0.63)'}>
                                    {sort?.options?.map((i) => {
                                        return (
                                            <Box
                                                key={i.value}
                                                onClick={() => {
                                                    setSelectedSort(i);
                                                    onClose();
                                                }}
                                                cursor="pointer"
                                            >
                                                {i.label}
                                            </Box>
                                        );
                                    })}
                                </DrawerBody>
                            )}
                        </Box>

                        {!second ? (
                            <DrawerFooter position="sticky" left={0} right={0} bottom={0}>
                                <Button width={'158px'} mr={3} variant="mobileDrawer" onClick={onClose}>
                                    <Text textStyle="text" textTransform={'uppercase'}>
                                        {t('clean')}
                                    </Text>
                                </Button>
                                <Button width={'158px'} variant="mobileDrawer" mr={3} onClick={onClose}>
                                    <Text textStyle="text" textTransform={'uppercase'}>
                                        {t('apply')}
                                    </Text>
                                </Button>
                            </DrawerFooter>
                        ) : null}
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    );
};

export default CustomDrawer;
