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
            border="none"
            borderBottomWidth="1px"
            borderBottomColor="darkGrey"
            borderBottomStyle="solid"
            onClick={() => toggleClass()}
        >
            <AccordionButton display="flex" justifyContent="space-between" px="0" pt="15px" color="lightGrey">
                <Box key={title} textStyle="caption">
                    {title}
                </Box>
                <ChevronDownIcon w={7} h={7} />
            </AccordionButton>
            <AccordionPanel pl="0" pb={4}>
                <Box>
                    {submenu?.map(({ title }, index) => (
                        <Link
                            key={`${title}${index}`}
                            textStyle="caption"
                            display="block"
                            pl="0"
                            mt="10px"
                            color="grey"
                        >
                            {title}
                        </Link>
                    ))}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default AccordionItemCustom;
