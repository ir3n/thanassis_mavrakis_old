import { useQuery } from 'react-query';
import { getMenu } from 'services/menu';
import { useRouter } from 'next/router';
import { getRealLocale } from 'utils/helpers';

export default function useMenu(menuName) {
    const router = useRouter();

    const queryKey = ['menu', getRealLocale(router.locale), menuName];

    const fetcher = async () => {
        const menuResponse = await getMenu(getRealLocale(router.locale), menuName);
        return menuResponse.data;
    };

    const { data: menuData, isLoading } = useQuery(queryKey, fetcher, {
        refetchOnWindowFocus: false
    });

    return { menuData, isLoading };
}
