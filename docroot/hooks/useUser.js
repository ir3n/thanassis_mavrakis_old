import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getUser as apiGetUser } from 'services/user';
import { getErrorMessage, getRealLocale, handleFormError } from 'utils/helpers';
import { hasToken } from 'services/auth';

export const useUser = (authRoute) => {
    const router = useRouter();
    const locale = getRealLocale(router.locale);

    const queryKey = ['user', locale, hasToken()];

    const {
        data: userData,
        error,
        isValidating,
        isLoading
    } = useQuery(
        queryKey,
        hasToken()
            ? async () => {
                  const response = await apiGetUser(locale);
                  return response.data;
              }
            : null,
        { refetchOnMount: true, refetchOnWindowFocus: true, onError: handleFormError }
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
        isLoading,
        isLoggedIn,
        error: error && getErrorMessage(error)
    };
};

export default useUser;
