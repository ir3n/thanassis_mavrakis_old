import { useState, useEffect } from 'react';
import { Box, VStack, Link, Text, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import useTranslation from 'next-translate/useTranslation';

const DropdownMenu = ({ selectedMenu }) => {
    const { t } = useTranslation('common');
    const [dropdownMenuPosition, setDropdownMenuPosition] = useState(0);

    useEffect(() => {
        setDropdownMenuPosition(document.getElementById('mainMenu').clientHeight);
    }, []);

    return (
        <Box
            position="absolute"
            background="white"
            zIndex="9"
            top={dropdownMenuPosition}
            left={0}
            right={0}
            boxShadow="0px 4px 24px -15px rgb(0 0 0 / 5%)"
        >
            <Container>
                <Flex pt="20px" pb="35px" w="100%" justifyContent="space-between">
                    <Flex direction={'column'} wrap="wrap" maxH="350px">
                        {selectedMenu?.submenu?.map(({ title, submenu }, index) =>
                            submenu && submenu.length > 0 ? (
                                <VStack spacing={5} align="left" pb="50px" pr="50px" key={`dropdownItem-${index}`}>
                                    <Text color="brand" textStyle="menuParent" textTransform={'uppercase'}>
                                        {title}
                                    </Text>

                                    {submenu?.map(({ title, external, cleanUrl }, index) => (
                                        <VStack as="div" align="left" className="menu_items" key={`menuItem-${index}`}>
                                            <NextLink href={cleanUrl} passHref prefetch={false}>
                                                <Link
                                                    target={external ? '_blank' : '_self'}
                                                    _hover={{ color: 'brand' }}
                                                    color="grey"
                                                    textStyle="caption"
                                                >
                                                    {title}
                                                </Link>
                                            </NextLink>
                                        </VStack>
                                    ))}
                                </VStack>
                            ) : (
                                <Link color="brand" textStyle="menuParent" mb="20px" mr="50px">
                                    {title}
                                </Link>
                            )
                        )}
                    </Flex>
                    <Box>
                        <Text textStyle="menuParent" mb="10px" color="brand">
                            Render menu marketing post here
                        </Text>
                        <img src={'/assets/dummyimage.png'} alt="dummy image" />
                        <Text textStyle="caption" mt="10px" color="brand">
                            This is a test
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default DropdownMenu;
