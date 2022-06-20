import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { MainProvider } from 'context';
import uuid from 'react-uuid';
import CookieHelper from 'utils/cookie';
import MainLayout from 'components/layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import 'styles/overrides.css';

import '@fontsource/open-sans';
import '@fontsource/roboto';

import { theme } from 'theme';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        let cartToken = CookieHelper.load('cartToken');

        if (!cartToken) {
            let cartTokenUUID = uuid();

            CookieHelper.save('cartToken', cartTokenUUID, 500);
        }
    }, []);

    const [cartState, setCartState] = useState(false);
    const openCart = () => setCartState(true);
    const closeCart = () => setCartState(false);
    const toggleCart = () => setCartState(!cartState);

    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <MainProvider value={{ openCart, closeCart, toggleCart, cartState }}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </MainProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
