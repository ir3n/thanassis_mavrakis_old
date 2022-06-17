import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { getFormattedFilters } from 'utils/helpers';
import Filter from 'components/common/Filter';

const SelectedFilters = ({ selectedFilters, handleRemove }) => {
  const formattedFilters = selectedFilters ? getFormattedFilters(selectedFilters) : [];
  const { t } = useTranslation('common');

  return (
    <Box
      marginLeft="-7px"
      paddingTop="0px"
      paddingBottom="10px"
      display="flex"
      flexDir="row"
      flexFlow="wrap"
      className="filter"
    >
      {formattedFilters.map((filter, index) => (
        <Filter filter={filter} key={`selectedFilter-${index}`} handleRemove={handleRemove} />
      ))}
    </Box>
  );
};

export default SelectedFilters;
