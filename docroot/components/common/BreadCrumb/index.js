import { Box, Text, Link } from '@chakra-ui/react';
import Container from '../Container';
import Home from 'components/icons/Home';
import NextLink from 'next/link';
import MenuSeparator from '../Header/MenuSeparator';

const BreadCrumb = ({ breadcrumbs, white }) => {
    return (
        <Container className="Container">
            {breadcrumbs?.map(({ name, path }, index) => {
                return (
                    <Box my="8px" key={`breadcrumb-${index}`} d={'inline-block'}>
                        {name === 'Home' || name === 'Αρχική' ? (
                            <NextLink href={'/'} passHref prefetch={false}>
                                <Link pos="relative" _hover={{ textDecoration: 'none' }}>
                                    <Text textStyle={'captionSm'} color={'darkGrey'}>
                                        {name}
                                    </Text>
                                </Link>
                            </NextLink>
                        ) : (
                            <NextLink href={path || '#'} passHref prefetch={false} locale={false}>
                                <Link pos="relative" _hover={{ textDecoration: 'none' }}>
                                    <Text
                                        as={'span'}
                                        key={`BreadCrumb-${index}`}
                                        textStyle={'captionSm'}
                                        color={'darkGrey'}
                                    >
                                        / {name}
                                    </Text>
                                </Link>
                            </NextLink>
                        )}
                    </Box>
                );
            })}
        </Container>
    );
};

export default BreadCrumb;
