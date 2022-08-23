import { Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Credits = () => {
    return (
        <Flex direction={{ base: 'column', xs: 'row' }} align="center" justifyContent="center" mt="20px">
            <Flex mb={{ base: '10px', xs: '0' }} align="end">
                <Text textStyle="note" color="white">
                    Designed by
                </Text>
                <Link href="https://relevancedigital.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="assets/footer/logo-rlv.svg"
                            w={{ base: '75px', lg: '90px' }}
                            ml="5px"
                            alt="Relevance"
                        />
                    </a>
                </Link>
            </Flex>
            <Flex align="end" ml={{ base: '0', xs: '30px' }}>
                <Text textStyle="note" color="white">
                    Developed by
                </Text>
                <Link href="https://rocket-path.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="assets/footer/logo-rkpt.svg"
                            w={{ base: '90px', lg: '110px' }}
                            ml="5px"
                            alt="Rocket Path"
                        />
                    </a>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Credits;
