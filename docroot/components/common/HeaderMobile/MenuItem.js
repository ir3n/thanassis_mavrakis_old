import { Link, Box, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AddIcon } from '@chakra-ui/icons';
import CrossIcon from '../../../public/assets/cross-light.svg';
import CloseIcon from '../../../public/assets/exitbutton-light.svg';
import { useState } from 'react';
import MenuIcon from '../../../public/assets/menu-mobile-icon.svg';

const MenuItem = (
    { title, external, entity_id, url, submenu, renderSubmenu, fontWeight = 'normal', fontSize, mainMenu, pl, ml },
    index
) => {
    const [isClicked, setIsClicked] = useState(false);

    const btnHandler = () => {
        setIsClicked(!isClicked);
    };
    return submenu ? (
        <Box onClick={btnHandler} py="24px" pl={pl}>
            <Link
                onClick={renderSubmenu}
                height="100%"
                position="relative"
                className="menu-item"
                _focus={{ boxShadow: 'none' }}
                _hover={{ textDecoration: 'none' }}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontFamily={'Open sans'}
                lineHeight="16px"
                display="flex"
                alignItems={'center'}
                justifyContent={'space-between'}
                id={entity_id}
            >
                <Box display="flex" alignItems={'center'}>
                    {mainMenu && <MenuIcon />}
                    <Text textStyle={'md'} ml={ml}>
                        {title}
                    </Text>
                </Box>

                {mainMenu &&
                    (!isClicked ? (
                        <Box pos={'absolute'} right={'25px'} transition={'.5s'}>
                            <CrossIcon />
                        </Box>
                    ) : (
                        <Box pos={'absolute'} right={'25px'} transition={'.5s'} transform={'rotate(45deg)'}>
                            <CrossIcon />
                        </Box>
                    ))}
            </Link>
        </Box>
    ) : (
        <Box onClick={btnHandler} py="24px" pl={pl}>
            <NextLink href={url || '#'} key={index} passHref>
                <Link
                    target={external ? '_blank' : '_self'}
                    position="relative"
                    className="menu-item"
                    _focus={{ boxShadow: 'none' }}
                    _hover={{ textDecoration: 'none' }}
                    height="100%"
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    fontFamily={'Open sans'}
                    lineHeight="16px"
                    display="flex"
                    justifyContent={'space-between'}
                >
                    <Box display="flex" alignItems={'center'}>
                        {mainMenu && <MenuIcon />}
                        <Text textStyle={'md'} ml={ml}>
                            {title}
                        </Text>
                    </Box>
                    {mainMenu &&
                        (!isClicked ? (
                            <Box mr="24px">
                                <CrossIcon />
                            </Box>
                        ) : (
                            <Box mr="24px">
                                <CloseIcon />
                            </Box>
                        ))}
                </Link>
            </NextLink>
        </Box>
    );
};
export default MenuItem;
