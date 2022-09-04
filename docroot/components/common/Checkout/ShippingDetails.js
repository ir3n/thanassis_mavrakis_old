import { Box, Button, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createCheckoutProfile } from 'services/checkout';
import AddressInput from './AddressInput';
import { getErrorMessage } from 'utils/helpers';
import useCheckout from 'hooks/useCheckout';

export default function ShippingDetails({ onSuccess, checkoutId }) {
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const { checkoutData, updateCheckoutData } = useCheckout();
    const shippingProfile = checkoutData?.shipping_profile;
    const toast = useToast();
    const { register, handleSubmit, setValue, formState } = useForm();
    const router = useRouter();

    useEffect(() => {
        if (shippingProfile?.address) {
            for (let i in shippingProfile.address) {
                setValue(`address.${i}`, shippingProfile.address[i]);
            }
        }
        if (shippingProfile?.telephone) {
            setValue('telephone', shippingProfile.telephone);
        }
        //eslint-disable-next-line
    }, [shippingProfile]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const { data: newCheckoutData } = await createCheckoutProfile(router.locale, checkoutId, {
                ...data,
                address: { ...data.address, langcode: router.locale }
            });
            updateCheckoutData(newCheckoutData);
            onSuccess();
        } catch (err) {
            console.log(err);
            toast({
                title: t('error'),
                description: getErrorMessage(err),
                position: 'bottom-right',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoading(false);
        }
    };

    // console.log('shipping_profile: ', shipping_profile);

    return (
        <>
            <Box>
                <AddressInput register={register} errors={formState.errors} setValue={setValue} />

                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'end'} mb={'18px'}>
                    <Box as={'form'} w={{ sm: '100%', lg: '48%' }} mb={'18px'} onSubmit={handleSubmit(onSubmit)}>
                        <Button isLoading={loading} variant="green" w={'100%'} type={'submit'}>
                            {t('continue')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
