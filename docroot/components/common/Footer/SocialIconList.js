import { ListItem, Link, Image, Text } from '@chakra-ui/react';

const SocialIconList = ({ title, url, imageUrl, alt }) => {
    return url ? (
        <ListItem
            marginRight={{ base: '4px', sm: '8px' }}
            marginLeft={{ base: '4px', md: '0' }}
            marginTop={{ base: '10px' }}
        >
            <Link isExternal href={url} width={'100%'} height={35} display={'flex'} alignItems={'center'}>
                <Image src={imageUrl} alt={alt && alt} width={'15.24px'} height={'15.24'} color={'white'} />
                <Text fontSize={'11px'} h={'11px'} marginLeft={{ base: '12px' }}>
                    {title.toUpperCase()}
                </Text>
            </Link>
        </ListItem>
    ) : null;
};

export default SocialIconList;
