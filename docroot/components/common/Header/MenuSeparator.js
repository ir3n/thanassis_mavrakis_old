import { Box } from '@chakra-ui/react';

export default function MenuSeparator({ ...styleProps }) {
    return (
        <Box id="border" backgroundColor={'grey'} height={'0.5px'} width="100%" mb="16px" mt="4px" {...styleProps} />
    );
}
