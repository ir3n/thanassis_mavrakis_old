import { FormControl, Select, FormErrorMessage, FormLabel } from '@chakra-ui/react';

export default function FormSelect({
    label,
    id,
    options,
    isRequired,
    isDisabled,
    isReadOnly,
    placeholder,
    inputProps,
    controlProps,
    error
}) {
    return (
        <FormControl isRequired={isRequired} marginRight="20px" id={id} isInvalid={error} {...controlProps}>
            {label && <FormLabel d={label ? 'block' : 'none'}>{label}</FormLabel>}

            <Select
                placeholder={placeholder || ' '}
                borderColor={'borderForm'}
                _hover={{ borderColor: 'black' }}
                _focus={{ borderColor: 'black' }}
                isInvalid={error}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                borderRadius={'0px'}
                h={'48px'}
                {...inputProps}
            >
                {options.map(({ label, value }, index) => (
                    <option value={value} key={`formFields-${index}`}>
                        {label}
                    </option>
                ))}
            </Select>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}
