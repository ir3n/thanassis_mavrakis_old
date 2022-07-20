import { Link, Box, Image, Text, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const NextLevelMobileMenuHeader = ({ menuData, backLevel }) => {
    return (
        <Flex align="center" pb="30px">
            <Link onClick={backLevel} mr="10px" w="20px">
                <Image src="/assets/slider-arrow-left.svg" w="10px" alt="Previous" />
            </Link>
            <Box align="center" flex="1">
                <NextLink href={menuData?.relative} passHref prefetch={false}>
                    <Link>
                        <Text textStyle="caption" fontWeight="800" textTransform="uppercase" color="brand">
                            {menuData?.title}
                        </Text>
                        <Text textStyle="caption" color="red">
                            {'View all'}
                        </Text>
                    </Link>
                </NextLink>
            </Box>
        </Flex>
    );
};

export default NextLevelMobileMenuHeader;
