import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    Button,
    Checkbox,
    useToast,
    Link,
    VStack
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useBreakpointValue } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import User from '../../../public/assets/user-outline.svg';
import UserFill from '../../../public/assets/user-fill.svg';
import UserBlack from '../../../public/assets/user-black.svg';
import useTranslation from 'next-translate/useTranslation';
import FormInput from '../Forms/FormInput';
import useUser from 'hooks/useUser';
import useCart from 'hooks/useCart';
import { login, setAuthInfo } from 'services/auth';
import { getErrorMessage } from 'utils/helpers';
import { useRouter } from 'next/router';
import { PATTERN } from 'utils/constants';
import CookieHelper from 'utils/cookie';
import NextLink from 'next/link';

const Login = () => {
    const btnRef = useRef();
    const [loginState, setLoginState] = useState(false);
    const [loading, setLoading] = useState(false);
    const toggleLogin = () => setLoginState(!loginState);
    const closeLogin = () => setLoginState(false);
    const { userData, isLoading } = useUser();
    const toast = useToast();

    const router = useRouter();

    const logoutHandler = () => {
        CookieHelper.remove('auth');
        router.push('/account/sign_out');
    };

    useEffect(() => {
        closeLogin();
    }, [router.asPath]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const { data: authInfo } = await login(data.email, data.password, router.locale);
            setAuthInfo(authInfo);

            if (router.query.destination) {
                router.push(router.query.destination);
                return;
            }

            router.push('/account/information');
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

    const drawerSize = useBreakpointValue({ base: 'full', md: 'lg' });
    const { t } = useTranslation('login');

    return (
        <form>
            <Box
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
                _hover={{ cursor: 'pointer' }}
                onClick={toggleLogin}
            >
                {userData?.id && (
                    <Box mr="12px" d={{ base: 'none', lg: 'block' }}>
                        {' '}
                        {'userData?.first_name'}
                    </Box>
                )}
                {userData?.id || loginState ? <UserFill /> : <User />}
            </Box>
            <Drawer isOpen={loginState} placement="right" onClose={closeLogin} finalFocusRef={btnRef} size={drawerSize}>
                <DrawerContent
                    h={{ base: '100vh', xl: 'calc(100vh - 50px)' }}
                    bottom={'1px !important'}
                    top={'unset !important'}
                    p={{ base: '20px', lg: '20px 40px' }}
                >
                    <DrawerCloseButton
                        _focus={{}}
                        _hover={'none'}
                        _active={{}}
                        position="fixed"
                        right={'25px'}
                        top="30px"
                    />
                    <DrawerHeader align="center" mt="20px">
                        <Box align="center">
                            <UserBlack />
                        </Box>
                        <Text mt="8px" textStyle="lg">
                            {!userData?.id ? `${t('connect')}` : `${userData?.username}`}
                        </Text>
                        <Box w="100%" h="1px" background={'lightGrey'} mt="20px" />
                    </DrawerHeader>
                    <DrawerBody overflowY="auto" overflowX="hidden" p="20px 0 50px">
                        {!userData?.id ? (
                            <Box
                                as={'form'}
                                noValidate
                                onSubmit={handleSubmit(onSubmit)}
                                maxW={{ base: '100%', md: '300px' }}
                                m="auto"
                            >
                                <FormInput
                                    inputProps={{
                                        type: 'email',
                                        ...register('email', {
                                            required: 'required field',
                                            pattern: PATTERN
                                        })
                                    }}
                                    label={t('email')}
                                    backgroundColor={'lightBg'}
                                    color={'darkGrey'}
                                    id="email"
                                    error={errors?.email?.message}
                                    isRequired={true}
                                />
                                <FormInput
                                    inputProps={{
                                        type: 'password',
                                        ...register('password', { required: 'required field' })
                                    }}
                                    id="password"
                                    label={t('password')}
                                    error={errors?.password?.message}
                                    isRequired={true}
                                />
                                <Button
                                    type={'submit'}
                                    isLoading={loading}
                                    mt="1rem"
                                    variant="primary"
                                    w="100%"
                                    mb="10px"
                                >
                                    {t('connect')}
                                </Button>
                                <NextLink href="/forgot-password" passHref>
                                    <Link as="a" display="inline-block">
                                        <Text textStyle={'caption'} color="lightGrey">
                                            {t('forgotpass')}
                                        </Text>
                                    </Link>
                                </NextLink>

                                <Checkbox mt="10px" w="100%">
                                    {t('remember')}
                                </Checkbox>
                                <Button mt="1rem" variant="fb" w="100%">
                                    {t('loginFb')}
                                </Button>
                                <Button mt="1rem" variant="google" w="100%">
                                    {t('loginGoogle')}
                                </Button>

                                <Text mt="30px" textStyle="textLg" fontWeight="600" align="center">
                                    {t('noaccount')}
                                </Text>
                                <Button mt="8px" variant="outlineBlack" w="100%">
                                    {t('createAccount')}
                                </Button>
                            </Box>
                        ) : (
                            <VStack px="40px" align="center" spacing="35px" mt="20px">
                                <NextLink href="/account/general" passHref>
                                    <Link>
                                        <Text textStyle={'textLg'}>{t('account:myAccount')}</Text>
                                    </Link>
                                </NextLink>
                                <NextLink href="/account/orders" passHref>
                                    <Link>
                                        <Text textStyle={'textLg'}>{t('account:myOrders')}</Text>
                                    </Link>
                                </NextLink>
                                <NextLink href="/account/information" passHref>
                                    <Link>
                                        <Text textStyle={'textLg'}>{t('account:memberInformation')}</Text>
                                    </Link>
                                </NextLink>

                                <Button onClick={logoutHandler} mt="30px" variant="outlineBlack">
                                    {t('account:logOut')}
                                </Button>
                            </VStack>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </form>
    );
};

export default Login;
