import useTranslation from 'next-translate/useTranslation';
import { Box, Select } from '@chakra-ui/react';

const PerfumeEnhancement = ({ data, setFinalPrice, initPrice }) => {
    return (
        <Select
            placeholder="Select extra doses"
            borderRadius="0"
            maxW={{ base: '100%', md: '210px' }}
            w="100%"
            h="40px"
            onChange={(e) => {
                console.log(e.target.value);
                setFinalPrice((initPrice += e.target.value * 1));
            }}
            textStyle="text"
        >
            {data?.map((item, index) => (
                <option key={`perfume-enhancement-${index}`} value={item?.essence_price}>
                    {item?.essence_price_label}
                </option>
            ))}
        </Select>
    );
};

export default PerfumeEnhancement;
