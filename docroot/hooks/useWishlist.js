import { useRouter } from 'next/router';
import { getWishlist, addToWishlist } from 'services/wishlist';
import { useMutation, useQuery } from 'react-query';
import { getRealLocale } from 'utils/helpers';

export default function useWishlist() {
    const router = useRouter();
    const url = `/${getRealLocale(router.locale)}/api/v1/wishlist`;

    const queryKey = ['wishlist', getRealLocale(router.locale)];

    const { data: wishListData, error } = useQuery(
        queryKey,
        async () => {
            const response = await getWishlist(getRealLocale(router.locale));
            return response.data;
        },
        {}
    );

    const { mutateAsync: update } = useMutation(queryKey, async (items) => {
        const response = await addToWishlist(getRealLocale(router.locale), items);

        return response.data;
    });

    return {
        url,
        wishListData: wishListData ? wishListData : [],
        update,
        error
    };
}
