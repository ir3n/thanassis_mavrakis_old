import { useQuery } from 'react-query';

import { getRealLocale } from 'utils/helpers';
import { getHomePage } from 'services/homepage';

const useHomepage = (locale, initialData) => {
    const realLocale = getRealLocale(locale);

    const queryKey = ['homepage', realLocale];

    const fetcher = async () => {
        const homepageResponse = await getHomePage(realLocale);
        return homepageResponse.data;
    };

    const {
        data: homepageData,
        isLoading,
        error
    } = useQuery(queryKey, fetcher, {
        initialData: initialData,
        refetchOnWindowFocus: false
    });

    return { homepageData, isLoading, error };
};

export default useHomepage;
