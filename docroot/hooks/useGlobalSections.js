import { useQuery } from 'react-query';

import { getRealLocale } from 'utils/helpers';
import { getGlobalSections } from 'services/globalSections';

const useGlobalSections = (locale) => {
    const realLocale = getRealLocale(locale);

    const queryKey = ['globalSections', realLocale];

    const fetcher = async () => {
        const globalSectionsResponse = await getGlobalSections(realLocale);
        return globalSectionsResponse.data;
    };

    const {
        data: globalSections,
        isLoading,
        error
    } = useQuery(queryKey, fetcher, {
        refetchOnWindowFocus: false
    });

    return { globalSections, isLoading, error };
};

export default useGlobalSections;
