import { Box } from '@chakra-ui/react';

import CompleteItem from './CompleteItem';
import Container from 'components/common/Container';

export default function Success({ dataCheckout }) {
    return (
        <>
            <Box>
                <Box as={'h1'} textStyle={'h1'} textAlign={'center'} py={'45px'} borderBottom={'1px solid #919191'}>
                    {'Η παραγγελία σας ολοκληρώθηκε!'}
                </Box>
                <Container my={'40px'}>
                    <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }}>
                        {dataCheckout.map((i) => {
                            return (
                                <CompleteItem
                                    key={i.sku}
                                    quantity={i.quantity}
                                    image={i.image}
                                    price={i.price}
                                    sku={i.sku}
                                    title={i.product_title}
                                />
                            );
                        })}
                    </Box>
                </Container>
            </Box>
        </>
    );
}
