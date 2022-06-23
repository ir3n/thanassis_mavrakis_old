import { Button, Box, Grid, GridItem } from '@chakra-ui/react';

const buttonpage = () => {
    return (
        <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
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
            </Grid>

            <Box p="30px 0px 30px 0px" m="30px 0px 30px 0px" background="black">
                <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <GridItem>
                        <Button variant="outlineWhite" size="sm">
                            Secondary / sm
                        </Button>
                    </GridItem>
                    <GridItem>
                        <Button variant="outlineWhite">Secondary / md</Button>
                    </GridItem>
                    <GridItem>
                        <Button variant="outlineWhite" size="lg">
                            Secondary / lg
                        </Button>
                    </GridItem>
                </Grid>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                <GridItem>
                    <Button variant="outlineBlack" size="sm">
                        Outline / sm
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant="outlineBlack">Outline / md</Button>
                </GridItem>
                <GridItem>
                    <Button variant="outlineBlack" size="lg">
                        Outline / lg
                    </Button>
                </GridItem>
            </Grid>
            <Box p="30px 0px 30px 0px" m="30px 0px 30px 0px">
                <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <GridItem>
                        <Button variant="green" size="sm">
                            Green / sm
                        </Button>
                    </GridItem>
                    <GridItem>
                        <Button variant="green">Green / md</Button>
                    </GridItem>
                    <GridItem>
                        <Button variant="green" size="lg">
                            Green / lg
                        </Button>
                    </GridItem>
                </Grid>

                <Box textStyle="h1">Text h1</Box>
                <Box textStyle="h2">Text h2</Box>
                <Box textStyle="h3">Text h3</Box>
                <Box textStyle="h4">Text h4</Box>
                <Box textStyle="lg">Text lg</Box>
                <Box textStyle="md">Text md</Box>
                <Box textStyle="sm">Text sm</Box>
                <Box textStyle="caption">Text caption</Box>
                <Box textStyle="captionSm">Text captionSm</Box>
            </Box>
        </Box>
    );
};

export default buttonpage;