import { HStack, Flex } from '@chakra-ui/react';
import FooterIcon from './FooterIcon';

const FooterIcons = ({}) => {
    // const imagePath = `/assets/footer/card-${name}.svg`;
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
        <Flex justifyContent="space-between">
            <HStack spacing="25px">
                {footerIconsLeft?.map((item) => (
                    <FooterIcon src={item.name} alt={item.alt} />
                ))}
            </HStack>
            <HStack spacing="25px" align="end">
                {footerIconsRight?.map((item) => (
                    <FooterIcon src={item.name} alt={item.alt} />
                ))}
            </HStack>
        </Flex>
    );
};

export default FooterIcons;
