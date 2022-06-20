import { useState } from 'react';
import { Link, Box, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { PhoneIcon } from '@chakra-ui/icons';

const SubMenuFooter = () => {
    const { t } = useTranslation('common');

    return (
        <Box
            fontSize="14px"
            fontWeight="normal"
            lineHeight="18px"
            color={'white'}
            className={'custom'}
            backgroundColor={'black'}
            height={'100vh'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            pt={'20px'}
        >
            <Box mb={'10px'} pb={'30px'} textAlign={'center'}>
                <PhoneIcon />
                <NextLink href={'tel:210 6848300'} passHref prefetch={false}>
                    <Link>
                        <Box
                            as={'span'}
                            fontSize="14px"
                            fontWeight="bold"
                            fontFamily={'Open sans'}
                            lineHeight="18px"
                            paddingLeft={'8px'}
                            color={'white'}
                        >
                            {'(+30) 210 6848300'}
                        </Box>
                    </Link>
                </NextLink>
            </Box>
            <Box
                borderWidth={'1px'}
                borderStyle={'solid'}
                borderColor={'border'}
                w={'85%'}
                opacity={'0.5'}
                mb={'23px'}
            ></Box>
            <Link display={'flex'} mr={'35px'} color="white" fontSize={'18px'} fontFamily={'Open sans'}>
                SIGN IN
            </Link>
        </Box>
    );
};

export default SubMenuFooter;
