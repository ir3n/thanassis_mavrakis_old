import { Box, Grid, GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Container from 'components/common/Container';
import Filter from 'components/common/Designers/Filter';
import DesignerItem from 'components/common/Designers/DesignerItem';
import ItemPerPage from 'components/common/Designers/ItemPerPage';
import PageTitleImg from 'components/common/PageTitleImg';

export default function Designers() {
    const { t } = useTranslation('designers');
    const router = useRouter();

    var title = t('title');

    return (
        <>
            <Box>
                <PageTitleImg title={title} bgColor={'designersGreen'} />
                <Filter />
                <Container>
                    <Grid
                        templateColumns={{
                            sm: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        }}
                        gap={6}
                        my={'80px'}
                    >
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                        <GridItem>
                            <DesignerItem />
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
