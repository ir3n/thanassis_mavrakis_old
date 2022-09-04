import { FormControl, FormLabel, Input, FormErrorMessage, Box, Image } from '@chakra-ui/react';

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
    type
}) {
    return (
        <FormControl variant="floating" isRequired={isRequired} id={id} isInvalid={error} w={'100%'} {...controlProps}>
            {label && (
                <FormLabel fontSize={'14px'} marginBottom="5px" {...labelProps}>
                    {label}
                </FormLabel>
            )}
            <Input
                textTransform={upperCase ? 'uppercase' : 'none'}
                onChange={onChange}
                borderColor={'border'}
                _hover={{ borderColor: 'brand' }}
                _focus={{ borderColor: 'brand', boxShadow: 'none' }}
                _focusVisible={{ borderColor: 'border', boxShadow: 'none' }}
                placeholder={placeholder || ' '}
                type={type}
                borderRadius="0"
                backgroundColor="lightBg"
                color="darkGrey"
                isInvalid={error}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                value={value}
                width={'100%'}
                height={'40px'}
                mb="20px"
                {...inputProps}
            />

            {error ? (
                <Box pos={'absolute'} top={'13px'} right={'18px'}>
                    <Image src={'/assets/error.png'} alt="error" />
                </Box>
            ) : // <Box pos={'absolute'} top={'13px'} right={'18px'}>
            //     <Image src={'/assets/check.png'} alt="correct" />
            // </Box>
            null}

            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
