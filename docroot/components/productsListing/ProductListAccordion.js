import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
// import FiltersStack from 'components/common/FiltersStack';
import useTranslation from 'next-translate/useTranslation';

const ProductListAccordion = ({
  facets,
  selectedFilters,
  handleSelectFilter,
  isMobile,
  isValidating,
  toggleButton,
}) => {
  const { t } = useTranslation('common');
  return (
    <Accordion allowMultiple>
      {facets?.map(({ facet, filters, name }, index) => {
        return filters.length > 0 ? (
          <AccordionItem key={`AccordionItem-${index}`}>
            <Text fontSize={isMobile ? '16px' : '20px'} fontWeight="bold" paddingY="10px">
              {name}
            </Text>
            <AccordionButton>
              <Box textAlign="left" mr="10px">
                {t('filter_all')}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            {/* <AccordionPanel>
              <FiltersStack
                facet={facet}
                filters={filters}
                selectedFilters={selectedFilters}
                handleSelectFilter={handleSelectFilter}
                toggleButton={toggleButton}
              />
            </AccordionPanel> */}
          </AccordionItem>
        ) : null;
      })}
    </Accordion>
  );
};

export default ProductListAccordion;
