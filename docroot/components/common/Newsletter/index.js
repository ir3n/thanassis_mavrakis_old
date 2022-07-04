import { Box, Button, Text, Input } from '@chakra-ui/react';

const Newsletter = ({ title }) => {
    return (
        <Box mb="48px" display="flex" justifyContent={'center'} alignItems="center" bg="newsletter" h="352px">
            <Box
                ml={{ base: '18px', md: 0 }}
                h={{ base: '248px', md: '144px' }}
                w="672px"
                display="flex"
                flexDir={'column'}
                justifyContent="space-between"
            >
                <Text textStyle={'h2'}>{title}</Text>
                <Text textStyle={'md'}>Don’t miss a thing. Sign up to receive news and updates.</Text>
                <Box display={'flex'} flexDir={{ base: 'column', md: 'row', lg: 'row' }} justifyContent="space-between">
                    <Input
                        bg="white"
                        w={{ base: '324px', md: '408px' }}
                        h="48px"
                        placeholder="Email"
                        borderStyle="solid"
                        borderWidth={'1px'}
                        borderColor="black"
                        borderRadius={0}
                        mb={{ base: '16px', md: 0 }}
                    />
                    <Button size="md" variant="primary">
                        ΕΓΓΡΑΦΗ
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Newsletter;
