import React, { useState, useEffect, useRef } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import useTranslation from 'next-translate/useTranslation';

import Tracking from 'utils/tracking';

const SectionLink = ({ link: { title, url }, image }) => {
    const { t } = useTranslation('common');
    const imageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded && imageRef.current?.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <Box
            display="flex"
            flexDir={'column'}
            alignItems="center"
            paddingX={'1rem'}
            // width={'360px'}
            onClick={() => Tracking.selectItem(title)}
        >
            <NextLink href={url || '#'} passHref prefetch={false}>
                <Link pos="relative" as={'a'}>
                    <Box width={'100%'} textAlign="center" position={'relative'}>
                        {loaded ? null : <Box className="spinner" />}

                        <Image
                            ref={imageRef}
                            width={'360px'}
                            maxW="100%"
                            height={'232px'}
                            placeholder="blur"
                            style={{
                                margin: 'auto',
                                boxSize: '300px',
                                objectFit: 'cover',
                                maxWidth: '100%'
                            }}
                            alt={title}
                            src={image}
                            display={loaded ? '' : 'none'}
                            onLoad={() => setLoaded(true)}
                        />
                    </Box>
                </Link>
            </NextLink>

            <NextLink href={url || '#'} passHref prefetch={false}>
                <Link as={'a'}>
                    <Box ml="10px" textAlign="center" width={'100%'}>
                        <Box display={'flex'} justifyContent="flex-start" className="title" mt={{ base: '15px', sm: '0' }}>
                            <Box display="flex" flexDir={'column'} alignItems="flex-start">
                                <Box fontSize={'1rem'} fontFamily="roboto" maxW="220px" textAlign={'left'}>
                                    {title}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </NextLink>
        </Box>
    );
};

export default SectionLink;
