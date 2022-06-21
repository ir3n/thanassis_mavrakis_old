import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getUser as apiGetUser } from 'services/user';
import { useEffect } from 'react';
import CookieHelper from '../utils/cookie';

export const useUser = (authRoute) => {
    const router = useRouter();
    const { locale } = router;

    const queryKey = ['user', locale];

    function hasToken() {
        if (typeof window === 'undefined') {
            return false;
        } else {
            return Boolean(CookieHelper.load('auth'));
        }
    }

    const {
        data: userData,
        error,
        isValidating
    } = useQuery(
        queryKey,
        hasToken()
            ? async (locale) => {
                  const response = await apiGetUser(locale);
                  return response;
              }
            : null,
        { refetchOnMount: true }
    );

    useEffect(() => {
        if ((authRoute && !hasToken()) || (!userData?.id && authRoute && !isValidating)) {
            router.push('/login');
        }
        //eslint-disable-next-line
    }, [userData?.id, authRoute, isValidating]);

    const isLoggedIn = () => {
        return Boolean(hasToken() && userData?.id && !isValidating);
    };

    return {
        userData: userData ? userData : { id: null },
        isValidating,
        isLoggedIn,
        error
    };
};

export default useUser;
