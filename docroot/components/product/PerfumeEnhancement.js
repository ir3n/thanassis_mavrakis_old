import useTranslation from 'next-translate/useTranslation';
import { Box, Select } from '@chakra-ui/react';

const PerfumeEnhancement = ({ data, setFinalPrice, initPrice, setSelectedEssence }) => {
    return (
        <Select
            placeholder="Select extra doses"
            borderRadius="0"
            maxW={{ base: '100%', md: '210px' }}
            w="100%"
            h="40px"
            onChange={(e) => {
                console.log(data[e.target.value]);
                console.log(!data[e.target.value] ? initPrice : initPrice + data[e.target.value]?.essence_price);
                setFinalPrice(!data[e.target.value] ? initPrice : initPrice + data[e.target.value]?.essence_price);
                setSelectedEssence(data[e.target.value]);
            }}
            textStyle="text"
        >
            {data?.map((item, index) => (
                <option key={`perfume-enhancement-${index}`} value={index}>
                    {item?.essence_price_label}
                </option>
            ))}
        </Select>
    );
};

export default PerfumeEnhancement;
