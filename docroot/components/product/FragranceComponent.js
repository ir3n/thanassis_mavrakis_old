import useTranslation from 'next-translate/useTranslation';
import { Select } from '@chakra-ui/react';

const FragranceComponent = ({ data, setSelectedVariation }) => {
    function handleSelect(event) {
        setSelectedVariation(data?.find((i) => i?.id == event.target.value));
    }
    return (
        <Select
            borderRadius="0"
            w={{ base: '100%', md: '90px' }}
            h="40px"
            ml={{ base: '10px', md: '30px' }}
            onChange={handleSelect}
            textStyle="text"
        >
            {data?.map((item, index) => (
                <option key={`fragrance-attribute-${index}`} value={item?.id}>
                    {`${item?.attribute_name}ml`}
                </option>
            ))}
        </Select>
    );
};

export default FragranceComponent;
