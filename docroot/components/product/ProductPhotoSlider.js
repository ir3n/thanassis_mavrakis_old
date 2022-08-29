import { useBreakpointValue, Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export default function ProductPhotoSlider({ images }) {
    const [loaded, setLoaded] = useState(false);

    const items = images?.map((item, index) => {
        return {
            original: item,
            thumbnail: item
        };
    });

    const thumbsPosition = useBreakpointValue({
        base: 'bottom',
        md: 'left'
    });

    return items ? (
        <ImageGallery items={items} thumbnailPosition={thumbsPosition} showPlayButton={false} />
    ) : (
        <Box width="full">
            {loaded ? null : <Box className="spinner"></Box>}
            <Image
                w={120}
                h={120}
                alt={'No photo available'}
                src={'/assets/no-photo.png'}
                display={loaded ? '' : 'none'}
                onLoad={() => setLoaded(true)}
            />
        </Box>
    );
}
