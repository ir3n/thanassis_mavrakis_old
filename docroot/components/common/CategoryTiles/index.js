import { Box, Grid, GridItem } from '@chakra-ui/react';
import CategoryTile from './CategoryTile';

const CategoryTiles = ({ data }) => {
    console.log(data);
    return (
        <Box maxW="1440px" m={{ base: '0 auto 40px', lg: '0 auto 55px' }}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}>
                {data?.map(({ title, image, cta }, index) => (
                    <GridItem key={`category-tile-${index}`}>
                        <CategoryTile title={title} image={image} cta={cta} />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};
export default CategoryTiles;
