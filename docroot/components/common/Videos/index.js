import { Box, Grid, GridItem, Text, Button } from '@chakra-ui/react';
import VideoTeaser from './VideoTeaser';
import Container from '../Container';
import Link from 'next/link';

const Videos = ({ title, cta, items }) => {
    return (
        <Box py={{ base: '50px', xl: '80px' }}>
            <Container>
                <Text as="h3" textStyle="titleMd" color="brand" mb={'30px'} align="center">
                    {title}
                </Text>
                <Grid templateColumns={{ base: '', sm: 'repeat(3, 1fr)' }} gap={{ base: '10px', xl: '45px' }}>
                    {items?.map((item, index) => {
                        return (
                            <GridItem key={`videos-grid-${index}`}>
                                <VideoTeaser image={item.image} text={item.description} link={item.image_link} />
                            </GridItem>
                        );
                    })}
                </Grid>
                <Box mt="25px" align="center">
                    <Link href={cta?.url || ''} passHref>
                        <a target="_blank">
                            <Button variant={'outlineBlack'} w={{ base: 'full', sm: 'auto' }}>
                                {cta?.title}
                            </Button>
                        </a>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Videos;
