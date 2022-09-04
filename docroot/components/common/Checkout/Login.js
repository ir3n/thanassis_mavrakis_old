import { Box, Link, Button, Text, useToast } from '@chakra-ui/react';
import useCheckout from 'hooks/useCheckout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getErrorMessage } from 'utils/helpers';
import { addCheckoutEmail } from 'services/checkout';
import useTranslation from 'next-translate/useTranslation';
import FormInput from '../Forms/FormInput';
import NextLink from 'next/link';

export default function Login({ onSuccess, visitor_email, checkoutId, isVisible }) {
    const toast = useToast();
    const router = useRouter();
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(null);

    const { checkoutData } = useCheckout();

    useEffect(() => {
        if (checkoutData?.customer_email) setEmail(checkoutData?.customer_email);
    }, [checkoutData?.customer_email]);

    function validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    useEffect(() => {
        if (visitor_email) {
            setEmail(visitor_email);
        }
    }, [visitor_email]);

    if (!isVisible) return null;

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await addCheckoutEmail(router.locale, checkoutId, email);
            onSuccess();
        } catch (err) {
            console.log(err);
            toast({
                description: getErrorMessage(err),
                position: 'top',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box>
                <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    <NextLink href={'/login?destination=/checkout' || '#'} passHref prefetch={false}>
                        <Link _hover="{ textDecoration: 'none' }" w={{ sm: '100%', lg: '48%' }}>
                            <Button
                                variant="outlineBlack"
                                w={'100%'}
                                textTransform={'uppercase'}
                                textStyle={'md'}
                                mt={'12px'}
                            >
                                {t('login')}
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href={'/' || '#'} passHref prefetch={false}>
                        <Link _hover="{ textDecoration: 'none' }" w={{ sm: '100%', lg: '48%' }}>
                            <Button
                                variant="outlineBlack"
                                w={'100%'}
                                textTransform={'uppercase'}
                                textStyle={'md'}
                                mt={'12px'}
                            >
                                {t('register')}
                            </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Text textStyle={'md'} mt={'25px'}>
                    {t('guest')}
                </Text>
                <Box
                    mt={'12px'}
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent={'space-between'}
                >
                    <Box w={{ sm: '100%', lg: '48%' }}>
                        <FormInput
                            backgroundColor={'white'}
                            color={'black'}
                            placeholder={t('email')}
                            removeLabel
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Box>
                    <Button
                        isLoading={loading}
                        variant="green"
                        w={{ sm: '100%', lg: '48%' }}
                        onClick={() => handleSubmit()}
                        disabled={!validateEmail(email)}
                    >
                        {t('continue')}
                    </Button>
                </Box>
            </Box>
        </>
    );
}
