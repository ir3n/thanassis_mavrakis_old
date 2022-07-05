import { Flex } from '@chakra-ui/react';
import FooterIcon from './FooterIcon';
import footerIcons from 'constants/footerIcons';

const FooterIcons = ({}) => {
    return (
        <Flex align="center" justifyContent="space-between" direction={{ base: 'column-reverse', md: 'row' }}>
            <Flex wrap="wrap" gap={{ base: '15px', md: '25px' }}>
                {footerIcons.left?.map((item) => (
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
                {footerIcons.right?.map((item) => (
                    <FooterIcon key={item.name} src={item.name} alt={item.alt} />
                ))}
            </Flex>
        </Flex>
    );
};

export default FooterIcons;
