import Link from 'next/link';
import { Image } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

const Slide = ({ link, image, mobileImage }) => {
    const imageSrc = useBreakpointValue({ base: mobileImage, lg: image });

    return (
        <Link href={link}>
            <a>
                <Image src={imageSrc} alt={'DUST+CREAM'} display="block" margin="0 auto" />
            </a>
        </Link>
    );
};

export default Slide;
