import { Grid, Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ProductPhotos({ productMedia, productTitle, handleZoom }) {
    const [loaded, setLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    const imageHandler = (e) => {
        setImageSrc(e.target.src);
    };

    return (
        <Box mt={'1rem'} id={'main-box'} d={'flex'} className={'main'} width={'552px'} justifyContent="space-between">
            {productMedia && productMedia.length > 0 ? (
                <>
                    <Box
                        d="flex"
                        flexDir={'column'}
                        mb={'2rem'}
                        className="second-box"
                        height={'100%'}
                        justifyContent="flex-start"
                    >
                        {productMedia?.map(({ url, type }, index) => (
                            <Box key={`ProductPhotos-${index}`} className={`ProductPhotos-${index}`}>
                                <Image
                                    width={'72px'}
                                    maxHeight={'96px'}
                                    src={url}
                                    key={url}
                                    mb="16px"
                                    onClick={imageHandler}
                                    cursor={'pointer'}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Box>
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                width={'456px'}
                                maxWidth="100%"
                                paddingX="20px"
                                onClick={() => {
                                    handleZoom();
                                }}
                            />
                        ) : (
                            <Image src={productMedia[0].url} width={'456px'} maxWidth="100%" paddingX="20px" />
                        )}
                    </Box>
                </>
            ) : (
                <Box width={'100%'}>
                    {loaded ? null : <Box className="spinner"></Box>}
                    <Image
                        w={120}
                        h={120}
                        alt={'No photo available'}
                        maxW="100%"
                        maxH={'100%'}
                        src={'/assets/no-photo.png'}
                        display={loaded ? '' : 'none'}
                        onLoad={() => setLoaded(true)}
                    />
                </Box>
            )}
        </Box>
    );
}
