import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import FormInput from '../Forms/FormInput';

export default function InvoiceInput({ register, errors, setValue }) {
    const { t } = useTranslation('invoice');

    return (
        <Box className={'InvoiceInput'}>
            <FormInput
                controlProps={{ mb: '10px' }}
                inputProps={{ ...register('invoice.company_name', { required: t('requiredField') }) }}
                id="invoice.company_name"
                isRequired
                marginRight="20px"
                label={t('companyName')}
                error={errors?.company_name?.message}
                upperCase
            />

            <FormInput
                controlProps={{ mb: '10px' }}
                inputProps={{ ...register('invoice.company_activity', { required: t('requiredField') }) }}
                id="invoice.company_activity"
                isRequired
                label={t('activity')}
                error={errors?.company_activity?.message}
                upperCase
            />

            <FormInput
                controlProps={{ mb: '10px' }}
                isRequired
                inputProps={{ ...register('invoice.vat', { required: t('requiredField') }) }}
                id="invoice.vat"
                label={t('vat')}
                error={errors?.vat?.message}
                upperCase
            />

            <FormInput
                controlProps={{ mr: 0 }}
                isRequired
                inputProps={{ ...register('invoice.vat_authority', { required: t('requiredField') }) }}
                id="invoice.vat_authority"
                label={t('doy')}
                error={errors?.vat_authority?.message}
                upperCase
            />
        </Box>
    );
}
