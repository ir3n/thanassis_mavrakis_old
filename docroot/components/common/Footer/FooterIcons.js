import { HStack, Flex } from '@chakra-ui/react';
import FooterIcon from './FooterIcon';

const FooterIcons = ({}) => {
    const footerIconsLeft = [
        {
            name: 'card-1.png',
            alt: 'GRECA 2019'
        },
        {
            name: 'card-2.png',
            alt: 'ECOMMERCE EUROPE'
        },
        {
            name: 'card-3.png',
            alt: 'EBEA ACCI AWARDS 2020'
        }
    ];
    const footerIconsRight = [
        {
            name: 'card-4.png',
            alt: 'PIREUS BANK'
        },
        {
            name: 'card-5.png',
            alt: 'VISA'
        },
        {
            name: 'card-6.png',
            alt: 'MasterCard'
        },
        {
            name: 'card-7.png',
            alt: 'Maestro'
        },
        {
            name: 'card-8.png',
            alt: 'MasterCard SecureCode'
        },
        {
            name: 'card-9.png',
            alt: 'Verified by VISA'
        }
    ];

    return (
        <Flex align="center" justifyContent="space-between" direction={{ base: 'column-reverse', md: 'row' }}>
            <Flex wrap="wrap" gap={{ base: '15px', md: '25px' }}>
                {footerIconsLeft?.map((item) => (
                    <FooterIcon key={item.name} src={item.name} alt={item.alt} />
                ))}
            </Flex>
            <Flex
                wrap="wrap"
                gap={{ base: '15px', md: '25px' }}
                align={{ base: 'center', md: 'end' }}
                mb={{ base: '20px', md: '0' }}
                justifyContent={{ base: 'center', md: 'end' }}
            >
                {footerIconsRight?.map((item) => (
                    <FooterIcon key={item.name} src={item.name} alt={item.alt} />
                ))}
            </Flex>
        </Flex>
    );
};

export default FooterIcons;
