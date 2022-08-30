import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import FiltersStack from 'components/common/FiltersStack';
import useTranslation from 'next-translate/useTranslation';

const ProductListAccordion = ({
    facets,
    selectedFilters,
    handleSelectFilter,
    isMobile,
    isValidating,
    toggleButton
}) => {
    const { t } = useTranslation('common');
    return (
        <Accordion allowMultiple>
            {facets?.map(({ facet, filters, name }, index) => {
                return filters.length > 0 ? (
                    <AccordionItem key={`AccordionItem-${index}`} border={'none'}>
                        <AccordionButton p={'10px 0'}>
                            <Box w={'100%'} display={'flex'} justifyContent={'space-between'}>
                                <Box textAlign="left" mr="10px" textStyle={'text'} fontWeight="700">
                                    {name}
                                </Box>
                                <AccordionIcon />
                            </Box>
                        </AccordionButton>
                        <AccordionPanel className={'product-filter-wrapper'} borderBottom={'1px solid #C4C4C4'}>
                            <FiltersStack
                                facet={facet}
                                filters={filters}
                                selectedFilters={selectedFilters}
                                handleSelectFilter={handleSelectFilter}
                                toggleButton={toggleButton}
                            />
                        </AccordionPanel>
                    </AccordionItem>
                ) : null;
            })}
        </Accordion>
    );
};

export default ProductListAccordion;
