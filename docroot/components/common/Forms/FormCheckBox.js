import { FormControl, Checkbox, FormErrorMessage } from '@chakra-ui/react';

export default function FormCheckBox({
  label,
  id,
  isRequired,
  isDisabled,
  isReadOnly,
  placeholder,
  inputProps,
  controlProps,
  error,
  isChecked,
}) {
  return (
    <FormControl isRequired={isRequired} marginRight="20px" id={id} isInvalid={error} {...controlProps}>
      <Checkbox
        colorScheme="pink"
        marginTop="8px"
        type={'text'}
        borderRadius="0"
        placeholder={placeholder}
        borderColor={'text.secondary'}
        isInvalid={error}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        {...inputProps}
        isChecked={isChecked}
        d="flex"
        alignItems="baseline"
        isRequired={isRequired}
      >
        {' '}
        {label}{' '}
      </Checkbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
