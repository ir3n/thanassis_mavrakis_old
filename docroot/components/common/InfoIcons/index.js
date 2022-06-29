import { Box, Grid } from '@chakra-ui/react';
import Single from './Single';
import Container from 'components/common/Container';

const InfoIcons = ({ data }) => {
    return (
        <>
            <Box
                className="info-box"
                borderTop="1px"
                borderBottom="1px"
                borderColor={'brand.900'}
                paddingBottom={'25px'}
                paddingTop={'25px'}
                marginTop="35px"
            >
                <Container>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        }}
                        gap={6}
                    >
                        {data?.map(({ data }, index) => (
                            <Single
                                imageUrl={data?.icon}
                                title={data?.title}
                                text={data?.text}
                                cta={data?.cta}
                                key={index}
                            />
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default InfoIcons;
