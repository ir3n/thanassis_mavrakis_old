import { Link, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const SocialIcon = ({ name, url }) => {
    const imageUrl = `/assets/social/${name}.svg`;
    return (
        <NextLink href={url} passHref prefetch={false}>
            <Link
                width="20px"
                height="20px"
                display="flex"
                align="center"
                justifyContent="center"
                filter="auto"
                brightness="0"
                invert="1"
                transition="0.3s"
                _hover={{
                    brightness: '1',
                    invert: '0'
                }}
            >
                <Image src={imageUrl} alt={name} />
                <Text display="none">{name}</Text>
            </Link>
        </NextLink>
    );
};

export default SocialIcon;
