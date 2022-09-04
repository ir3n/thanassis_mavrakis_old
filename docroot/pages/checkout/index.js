import { useEffect, useState } from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import Login from 'components/common/Checkout/Login';
import Container from 'components/common/Container';
import CartSum from 'components/common/Cart/CartSum';
import ShippingDetails from 'components/common/Checkout/ShippingDetails';
import BillingDetails from 'components/common/Checkout/BillingDetails';
import Shipping from 'components/common/Checkout/Shipping';
import Submission from 'components/common/Checkout/Submission';
import Method from 'components/common/Checkout/Method';
import useCheckout from 'hooks/useCheckout';
import useUser from 'hooks/useUser';

export default function Checkout() {
    const { t } = useTranslation('checkout');
    const { checkoutData } = useCheckout();
    const { userData } = useUser();
    const { cartData } = useCart();

    const CHECKOUT_STEPS = [
        {
            label: t('accountInformation'),
            id: 'ACCOUNT_INFO',
            index: 0
        },
        {
            label: t('shippingInformation'),
            id: 'SHIPPING',
            index: 1
        },
        {
            label: t('billingInformation'),
            id: 'BILLING',
            index: 2
        },
        {
            label: t('shippingMethod'),
            id: 'SHIPPING_METHOD',
            index: 3
        },
        {
            label: t('paymentMethod'),
            id: 'PAYMENT_METHOD',
            index: 4
        },
        {
            label: t('orderSubmission'),
            id: 'SUBMISSION',
            index: 5
        }
    ];

    const initialState = userData?._id || checkoutData?.customer_email ? CHECKOUT_STEPS[1] : CHECKOUT_STEPS[0];
    const [currentStep, setCurrentStep] = useState(initialState);

    const isStepDisabled = (stepId) => {
        switch (stepId) {
            case 'SHIPPING':
                if (userData?._id === true) {
                    return false;
                } else {
                    return Boolean(!checkoutData?.customer_email);
                }

            case 'BILLING':
                return Boolean(!checkoutData?.shipping_profile?.key);
            case 'SHIPPING_METHOD':
                return Boolean(!checkoutData?.shipping_profile?.key || !checkoutData?.billing_profile?.key);
            case 'PAYMENT_METHOD':
                return Boolean(!checkoutData?.shipping_profile?.key || !checkoutData?.shipping_method?.key);
            case 'SUBMISSION':
                return Boolean(
                    !checkoutData?.shipping_profile?.key ||
                        !checkoutData?.billing_profile?.key ||
                        !checkoutData?.shipping_method?.key ||
                        !checkoutData?.payment_method
                );
            default:
                return false;
        }
    };

    useEffect(() => {
        if (checkoutData?.payment_method) {
            setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === 'SUBMISSION'));
            return;
        }

        if (checkoutData?.shipping_method?.key) {
            setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === 'PAYMENT_METHOD'));
            return;
        }

        if (checkoutData?.billing_profile?.key) {
            setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === 'SHIPPING_METHOD'));
            return;
        }

        if (checkoutData?.shipping_profile?.key) {
            setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === 'BILLING'));
            return;
        }

        if (userData?._id || checkoutData?.customer_email) {
            setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === 'SHIPPING'));
        }
        //eslint-disable-next-line
    }, [checkoutData]);

    const handleOnCompleteStep = (stepID) => {
        setCurrentStep(CHECKOUT_STEPS.find((step) => step.id === stepID));
    };

    const renderFormStep = (stepId) => {
        switch (stepId) {
            case 'ACCOUNT_INFO':
                return (
                    <Login
                        isVisible={!userData?._id}
                        checkoutId={checkoutData?.order_id}
                        visitor_email={checkoutData?.customer_email}
                        onSuccess={() => {
                            handleOnCompleteStep('SHIPPING');
                        }}
                    />
                );
            case 'SHIPPING':
                return (
                    <ShippingDetails
                        checkoutId={checkoutData?.order_id}
                        items={checkoutData?.order_items}
                        totalPrice={checkoutData?.total_price}
                        onSuccess={() => {
                            handleOnCompleteStep('BILLING');
                        }}
                    />
                );
            case 'BILLING':
                return (
                    <BillingDetails
                        checkoutId={checkoutData?.order_id}
                        totalPrice={checkoutData?.total_price}
                        shippingProfile={checkoutData?.shipping_profile}
                        // is_invoice={checkoutData?.is_invoice}
                        vat={checkoutData?.vat}
                        vat_authority={checkoutData?.vat_authority}
                        company_name={checkoutData?.company_name}
                        company_activity={checkoutData?.company_activity}
                        onSuccess={() => {
                            handleOnCompleteStep('SHIPPING_METHOD');
                        }}
                    />
                );

            case 'SHIPPING_METHOD':
                return (
                    <Shipping
                        availableShippingMethods={checkoutData?.available_shippings_methods}
                        shipping_method={checkoutData?.shipping_method}
                        shipping_extra_options={checkoutData?.shipping_extra_options}
                        checkoutId={checkoutData?.order_id}
                        // totalPrice={checkoutData?.total_price}
                        // items={checkoutData?.order_items}
                        orderComments={checkoutData?.order_comments}
                        giftMessage={checkoutData?.gift_message}
                        giftVariations={checkoutData?.gift_variations}
                        onSuccess={() => {
                            handleOnCompleteStep('PAYMENT_METHOD');
                        }}
                    />
                );
            case 'PAYMENT_METHOD':
                return (
                    <Method
                        availablePaymentMethods={checkoutData?.available_payment_methods}
                        // totalPrice={checkoutData?.total_price}
                        items={checkoutData?.order_items}
                        payment_method={checkoutData?.payment_method}
                        checkoutId={checkoutData?.order_id}
                        shippingProfile={checkoutData?.shipping_profile}
                        billingProfile={checkoutData?.billing_profile}
                        onSuccess={() => {
                            handleOnCompleteStep('SUBMISSION');
                        }}
                    />
                );
            case 'SUBMISSION':
                return (
                    <Submission
                        orderComments={checkoutData?.order_comments}
                        checkoutData={checkoutData}
                        checkoutId={checkoutData?.order_id}
                        onSuccess={() => {
                            handleOnCompleteStep('OVERVIEW');
                        }}
                    />
                );
            default:
                break;
        }
    };

    return (
        <Box>
            <Container my={'40px'}>
                <Box
                    textStyle={'subtitle'}
                    textAlign={{ base: 'center', lg: 'left' }}
                    textTransform={'uppercase'}
                    p={{ base: '0 0 25px 0', lg: '40px 0 25px 0' }}
                    fontWeight={'700'}
                >
                    {t('checkout')}
                </Box>

                <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }}>
                    <Box w={{ base: '100%', lg: '65%' }} marginRight={'10px'}>
                        <Accordion index={[currentStep?.index]}>
                            {CHECKOUT_STEPS.map((i) => {
                                return (
                                    <AccordionItem
                                        style={{ display: i.index === 0 && userData?.id ? 'none' : 'auto' }}
                                        id={i.id}
                                        key={i.id}
                                        onClick={() => {
                                            !isStepDisabled(i.id) && handleOnCompleteStep(i.id);
                                        }}
                                        isDisabled={isStepDisabled(i.id)}
                                        borderBottom={'none'}
                                        borderTop={'none'}
                                        mb={'25px'}
                                    >
                                        <h2>
                                            <AccordionButton
                                                p={'15px 0 2px 0'}
                                                borderBottom={'1px solid #000000'}
                                                _hover={{
                                                    transition: 'all 0.2s ease-in-out',
                                                    opacity: 0.75,
                                                    backgroundColor: 'brand.900'
                                                }}
                                                aria-expanded={true}
                                            >
                                                <Text
                                                    flex="1"
                                                    textAlign="left"
                                                    textStyle={'md'}
                                                    fontWeight={'bold'}
                                                    textTransform={'uppercase'}
                                                >
                                                    {i.label}
                                                </Text>
                                                <AccordionIcon fontSize={'28px'} />
                                            </AccordionButton>
                                        </h2>
                                        {currentStep.id === i.id && (
                                            <AccordionPanel p={'15px 0 5px 0'}>{renderFormStep(i.id)}</AccordionPanel>
                                        )}
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </Box>

                    <Box w={{ base: '100%', lg: '35%' }} marginLeft={{ base: '0', lg: '20px' }}>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem borderBottom={'none'} borderTop={'none'} mb={'25px'}>
                                <h2>
                                    <AccordionButton
                                        p={'15px 0 2px 0'}
                                        borderBottom={'1px solid #000000'}
                                        _hover={{
                                            transition: 'all 0.2s ease-in-out',
                                            opacity: 0.75,
                                            backgroundColor: 'brand.900'
                                        }}
                                    >
                                        <Text flex="1" textAlign="left" textStyle={'md'} fontWeight={'bold'}>
                                            {'ΕΙΔΗ ΣΤΟ ΚΑΛΑΘΙ: '}
                                            {cartData?.order_items?.length}
                                        </Text>
                                        <AccordionIcon fontSize={'28px'} />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel p={'15px 0 5px 0'}>
                                    <CartSum cartData={cartData} />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
