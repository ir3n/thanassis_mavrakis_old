import { useState } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import useMenu from 'hooks/useMenu';
import { AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useTranslation from 'next-translate/useTranslation';

const AccordionItemCustom = ({ title, submenu }) => {
    const { t } = useTranslation('footer');

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <AccordionItem
            key={title}
            isFocusable={false}
            border={'none'}
            borderBottomWidth={'1px'}
            borderBottomColor={'footer.border'}
            borderBottomStyle={'solid'}
            className="accordionItem"
            onClick={() => toggleClass()}
        >
            <AccordionButton
                boxShadow={'none !important'}
                display={'flex'}
                justifyContent={'space-between'}
                pl={'0'}
                pt={'15px'}
            >
                <Image
                    src={'/assets/close.png'}
                    pos={'absolute'}
                    alt="image"
                    w={'15px'}
                    h={'15px'}
                    right={'20px'}
                    transform={isActive ? 'rotate(90deg)' : 'rotate(45deg)'}
                />
                <Box key={title} textStyle={'caption'}>
                    {title}
                </Box>
                <ChevronDownIcon w={7} h={7} />
            </AccordionButton>
            <AccordionPanel pl={'0'} pb={4}>
                <Box>
                    {submenu?.map(({ title }, index) => (
                        <Link key={`${title}${index}`} textStyle={'caption'} display={'block'} pl={'0'} mt={'1rem'}>
                            {title}
                        </Link>
                    ))}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default AccordionItemCustom;
