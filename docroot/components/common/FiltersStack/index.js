import React from 'react';
import { Stack, Checkbox, Box } from '@chakra-ui/react';

const FiltersStack = ({ facet, filters, selectedFilters, handleSelectFilter, toggleButton }) => {
    return (
        <Stack direction="column">
            {filters
                .sort((a, b) => {
                    if (a.sort_number && b.sort_number) {
                        return +a.sort_number - +b.sort_number;
                    }

                    a = a.filter?.toLowerCase();
                    b = b.filter?.toLowerCase();
                    return a < b ? -1 : a > b ? 1 : 0;
                })
                .map((i, index) => (
                    <Checkbox
                        key={`Checkbox-${index}`}
                        isChecked={Boolean(
                            selectedFilters &&
                                selectedFilters[facet] &&
                                selectedFilters[facet].find((j) => j.filter_transliterated === i.filter_transliterated)
                        )}
                        onChange={() => {
                            handleSelectFilter(facet, i);
                            toggleButton ? toggleButton() : false;
                        }}
                        value={`${i.filter_transliterated}`}
                        className={'product-filter-row'}
                    >
                        <Box>{i.filter}</Box>
                        <Box>({i.count})</Box>
                    </Checkbox>
                ))}
        </Stack>
    );
};

export default FiltersStack;
