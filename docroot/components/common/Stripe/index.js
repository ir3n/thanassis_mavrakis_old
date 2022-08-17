import { Text, Box } from '@chakra-ui/react';

const Stripe = ({ color, text }) => {
    return (
        <Box bgColor={color}>
            <Text p="5px" color="white" align="center" textStyle="captionSm">
                {text}
            </Text>
        </Box>
    );
};

export default Stripe;
