import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

export default function FormInput({
    label,
    id,
    isRequired,
    isDisabled,
    isReadOnly,
    labelProps,
    placeholder,
    inputProps,
    controlProps,
    error,
    onChange,
    upperCase,
    value
}) {
    return (
        <FormControl isRequired={isRequired} id={id} isInvalid={error} {...controlProps} w={'fit-content'}>
            <FormLabel textStyle="labelText" marginBottom="0" {...labelProps}>
                {label}
            </FormLabel>
            <Input
                textTransform={upperCase ? 'uppercase' : 'none'}
                onChange={onChange}
                type={'text'}
                borderRadius="0"
                placeholder={placeholder}
                borderColor={'borderForm'}
                backgroundColor={'black'}
                color={'white'}
                isInvalid={error}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                value={value}
                {...inputProps}
                width={'fit-content'}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
