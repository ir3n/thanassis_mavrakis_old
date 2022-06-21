import { Box, Text, Image, Link, Grid, GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';

const ProductCategories = ({ info }) => {
    const { t } = useTranslation('product');

    return (
        <>
            <Box d="flex" mt="88px">
                <Box mr="24px">
                    <Text textStyle={'md'} width="264px" fontWeight="bold" mb="1rem" as="h3">
                        {t('categories')}
                    </Text>
                    {info?.termChildren?.map((item) => {
                        return (
                            <Box key={item.cleanUrl} as="div" mb="1rem">
                                <NextLink href={item?.cleanUrl}>
                                    <Text cursor={'pointer'} textStyle={'md'} width="262px">
                                        {item.title}
                                    </Text>
                                </NextLink>
                            </Box>
                        );
                    })}
                </Box>
                {/* <Grid templateColumns="repeat(2, 1fr)" height="616px" gap={'24px'}>
                    {info?.sections?.map((item) => {
                        return (
                            <NextLink href={item.link.url}>
                                <Link _hover={'none'}>
                                    <GridItem
                                        width={'360px'}
                                        height={'296px'}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={item.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {item.link.title}
                                        </Text>
                                    </GridItem>
                                </Link>
                            </NextLink>
                        );
                    })}
                </Grid> */}
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(9, 1fr)" gap={4} height="616px">
                    {info?.sections[0] && (
                        <GridItem colSpan={4}>
                            <NextLink href={info?.sections[0]?.link.url}>
                                <Link width={'360px'} _hover={'none'}>
                                    <Box
                                        width={'360px'}
                                        colSpan={4}
                                        height={'296px'}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={info?.sections[0]?.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {info?.sections[0]?.link.title}
                                        </Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        </GridItem>
                    )}
                    {info?.sections[1] && (
                        <GridItem colSpan={5}>
                            <NextLink href={info?.sections[1]?.link.url}>
                                <Link _hover={'none'}>
                                    <Box
                                        width={'456px'}
                                        height={'296px'}
                                        colSpan={5}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={info?.sections[1]?.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {info?.sections[1]?.link.title}
                                        </Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        </GridItem>
                    )}
                    {info?.sections[2] && (
                        <GridItem colSpan={5}>
                            <NextLink href={info?.sections[2]?.link.url}>
                                <Link _hover={'none'}>
                                    <Box
                                        width={'458px'}
                                        height={'296px'}
                                        colSpan={5}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={info?.sections[2]?.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {info?.sections[2]?.link.title}
                                        </Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        </GridItem>
                    )}
                    {info?.sections[3] && (
                        <GridItem colSpan={4}>
                            <NextLink href={info?.sections[3]?.link.url}>
                                <Link _hover={'none'}>
                                    <Box
                                        width={'360px'}
                                        height={'296px'}
                                        colSpan={4}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={info?.sections[3]?.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {info?.sections[3]?.link.title}
                                        </Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        </GridItem>
                    )}
                    {info?.sections[4] && (
                        <GridItem colSpan={9}>
                            <NextLink href={info?.sections[4]?.link.url}>
                                <Link _hover={'none'}>
                                    <Box
                                        width={'360px'}
                                        height={'296px'}
                                        colSpan={4}
                                        d="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        backgroundImage={info?.sections[4]?.image}
                                    >
                                        <Text textStyle={'h3'} color="white">
                                            {info?.sections[4]?.link.title}
                                        </Text>
                                    </Box>
                                </Link>
                            </NextLink>
                        </GridItem>
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default ProductCategories;
