import FadeIn from 'components/transitions/FadeIn';

import { getRealLocale } from 'utils/helpers';

import useHomepage from 'hooks/useHomepage';
import { getHomePage } from 'services/homepage';
import { useRouter } from 'next/router';

import MetaTagsHandler from 'components/common/MetaTagsHandler';
import RenderSections from 'components/common/RenderSections';

export async function getStaticProps(context) {
    const { locale } = context;
    let correctLocale = getRealLocale(locale);

    const { data: homepageData } = await getHomePage(correctLocale);

    if (!homepageData) {
        return {
            revalidate: 5,
            notFound: true
        };
    }

    return {
        revalidate: 60,
        props: {
            pageData: { ...homepageData }
        }
    };
}

export default function Home({ pageData: initialData }) {
    const router = useRouter();

    const { homepageData } = useHomepage(router.locale, initialData);

    return (
        <FadeIn>
            {homepageData?.metaTags && <MetaTagsHandler metaTags={homepageData.metaTags} />}

            <RenderSections sections={homepageData?.sections} />
        </FadeIn>
    );
}
