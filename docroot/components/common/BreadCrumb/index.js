import { Box, Text, Link, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { isCurrentPath } from 'utils/helpers';

const BreadCrumb = ({ breadcrumbs }) => {
    return (
        <Flex py="20px" wrap="wrap">
            {breadcrumbs?.map(({ name, path }, index) => {
                return (
                    <Flex key={`breadcrumb-${index}`} mr="7px" align="center">
                        {path === '/' ? (
                            <NextLink href={'/'} passHref prefetch={false}>
                                <Link>
                                    <Image src="/assets/home.svg" alt="Home" w="10px" h="10px" />
                                </Link>
                            </NextLink>
                        ) : (
                            <NextLink href={path || '#'} passHref prefetch={false} locale={false}>
                                <Link>
                                    <Flex align="center">
                                        <Image src="/assets/breadcrumb-arrow.svg" alt="Next" w="6px" h="6px" mr="5px" />
                                        <Text
                                            as="span"
                                            key={`BreadCrumb-${index}`}
                                            textStyle="note"
                                            color={isCurrentPath(path) ? 'grey' : 'mediumGrey'}
                                        >
                                            {name}
                                        </Text>
                                    </Flex>
                                </Link>
                            </NextLink>
                        )}
                    </Flex>
                );
            })}
        </Flex>
    );
};

export default BreadCrumb;
