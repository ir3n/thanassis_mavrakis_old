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
    value,
    backgroundColor,
    color
}) {
    return (
        <FormControl isRequired={isRequired} id={id} isInvalid={error} {...controlProps} w={'100%'}>
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
                backgroundColor={backgroundColor}
                color={color}
                isInvalid={error}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                value={value}
                {...inputProps}
                width={'100%'}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
