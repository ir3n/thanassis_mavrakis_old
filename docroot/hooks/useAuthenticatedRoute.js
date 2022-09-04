import { useRouter } from 'next/router';
import useUser from './useUser';

export function useAuthenticatedRoute() {
    const router = useRouter();
    const { userData, isLoggedIn, isLoading } = useUser();

    if (isLoading) {
        return;
    }
    if (typeof window !== 'undefined' && !userData?.id && !isLoggedIn()) {
        router.push('/login');
    }
}
