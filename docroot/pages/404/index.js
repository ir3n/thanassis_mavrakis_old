import { useEffect } from 'react';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import FadeIn from 'components/transitions/FadeIn';
import NextLink from 'next/link';
import BreadCrumb from 'components/common/BreadCrumb';
import Container from 'components/common/Container';
import Tracking from 'utils/tracking';

const ErrorPage = () => {
    const breadcrumbs = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Error 404',
            path: ''
        }
    ];

    const { t } = useTranslation('error');

    return (
        <FadeIn>
            <Container>
                <BreadCrumb breadcrumbs={breadcrumbs} />
                <Box maxW="500px" p={{ base: '20px 0 70px', md: '40px 0 150px' }} align="center" m="auto">
                    <Text
                        as="h1"
                        fontSize={{ base: '120px', md: '140px' }}
                        color="lightGrey"
                        fontWeight="100"
                        letterSpacing="10px"
                    >
                        {'404'}
                    </Text>
                    <Text as="h2" textStyle="titleMd" mb="15px">
                        {'Whoops! Something went wrong.'}
                    </Text>
                    <Text as="p" textStyle="textLg" mb="40px" color="lightGrey">
                        {`The page you're looking for wasn't found.`}
                    </Text>
                    <NextLink href="/" passHref>
                        <Button variant="primary" w={{ base: 'full', sm: 'auto' }}>
                            {'BACK TO HOME'}
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </FadeIn>
    );
};

export default ErrorPage;
