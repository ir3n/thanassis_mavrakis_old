import { Button, Box, Grid, GridItem } from '@chakra-ui/react';

const buttonpage = () => {
    return (
        <Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <GridItem>
                    <Button variant="primary" size="sm">
                        Primary / sm
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="primary">Primary / md</Button>
                </GridItem>
                <GridItem>
                    <Button variant="primary" size="lg">
                        Primary / lg
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="primary" size="xl">
                        Primary / xl
                    </Button>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <GridItem>
                    <Button variant="secondary" size="sm">
                        Secondary / sm
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="secondary">Secondary / md</Button>
                </GridItem>
                <GridItem>
                    <Button variant="secondary" size="lg">
                        Secondary / lg
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="secondary" size="xl">
                        Secondary / xl
                    </Button>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <GridItem>
                    <Button variant="outline" size="sm">
                        Outline / sm
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="outline">Outline / md</Button>
                </GridItem>
                <GridItem>
                    <Button variant="outline" size="lg">
                        Outline / lg
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="outline" size="xl">
                        Outline / xl
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default buttonpage;
