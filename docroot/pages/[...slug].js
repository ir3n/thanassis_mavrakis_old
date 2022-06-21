import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProduct, getProductCategory } from 'services/product';
import { getAllPaths, getPathProps } from 'services/paths';
// import { getSingleBlog, getBlogListing } from 'services/blog';
// import { getBasicPages } from 'services/basicPages';
import { getLandingPageData } from 'services/landingPages';
import ProductListView from 'components/productsListing/ProductListView';
// import SearchProductListView from 'components/productsListing/SearchProductListView';
import ProductView from 'components/product/ProductView';
// import Blog from 'components/blog';
// import BasicPages from 'components/common/BasicPages';
import { getRealLocale } from 'utils/helpers';
import FadeIn from 'components/transitions/FadeIn';
import LandingListView from '../components/productsListing/LandingListView';
// import Tracking from '../utils/tracking';
// import useUser from 'hooks/useUser';
// import BlogCategoryView from 'components/blog/BlogCategoryView';

async function getPageDataByType(pageProps, query, correctLocale) {
    let apiGetPageData, pageData;
    switch (pageProps.type) {
        case 'commerce_product':
            apiGetPageData = getProduct;
            break;
        case 'taxonomy_term':
            switch (pageProps.bundle) {
                // case 'blog_category':
                //   apiGetPageData = getBlogListing;
                //   break;
                default:
                    apiGetPageData = getProductCategory;
                    break;
            }
            break;
        case 'node':
            switch (pageProps.bundle) {
                // case 'page':
                //     apiGetPageData = getBasicPages;
                //     break;
                // case 'article':
                //     apiGetPageData = getSingleBlog;
                //     break;
                case 'landing_page':
                    apiGetPageData = getLandingPageData;
                    break;
            }
            break;
    }

    if (!apiGetPageData) {
        return {
            revalidate: 5,
            notFound: true
        };
    }

    try {
        const { data } = await apiGetPageData(correctLocale, pageProps.id, 0);
        pageData = data;
    } catch (err) {
        console.log('error getting page data', err);
    }

    return {
        revalidate: 5 * 60,
        props: {
            page: { ...pageProps, query: query && query[0] ? query[0] : null },
            pageData: { ...pageData }
        }
    };
}

export async function getStaticProps(context) {
    const { params, locale } = context;
    let correctLocale = getRealLocale(locale);
    let pathName = params.slug;
    let query;
    // let term;
    let pageProps;
    try {
        let { data } = await getPathProps(correctLocale, `/${pathName.join('/')}`);
        pageProps = data;

        let existingPath = `/${correctLocale}/${pathName.join('/')}`;

        if (pageProps && pageProps.redirect && pageProps.path !== existingPath) {
            console.log('will redirect');
            return {
                redirect: {
                    source: existingPath,
                    destination: pageProps.path
                }
            };
        }

        if (!pageProps) {
            return {
                revalidate: 5,
                notFound: true
            };
        }

        return await getPageDataByType(pageProps, query, correctLocale);
    } catch (err) {
        console.log('>>>err.status', err.response.status);

        if (err?.response?.status === 404) {
            pathName = params.slug.slice(0, params.slug.length - 1);
            query = params.slug.slice(params.slug.length - 1, params.slug.length);

            try {
                if (pathName.length > 0) {
                    let { data } = await getPathProps(correctLocale, `/${pathName.join('/')}`);
                    pageProps = data;
                }
                return await getPageDataByType(pageProps, query, correctLocale);
            } catch (err) {
                console.log('error after 404', err);
                return {
                    revalidate: 5,
                    notFound: true
                };
            }
        }

        return {
            revalidate: 5,
            notFound: true
        };
    }
}
// Prerenders all pages during build time
export async function getStaticPaths() {
    //TODO: need to add 'en' locale (when endpoints are added)
    const { data: pagePaths } = await getAllPaths(['el']);

    const allAppPaths = pagePaths.reduce((acc, i) => {
        if (i.cleanUrl)
            return [
                ...acc,
                {
                    params: {
                        slug: i.cleanUrl ? i.cleanUrl.split('/').filter((p) => p !== '') : []
                    }
                }
            ];
        return acc;
    }, []);

    return {
        paths: allAppPaths,
        fallback: 'blocking'
    };
}

export default function Pages(props) {
    // const { isLoggedIn } = useUser();

    useEffect(() => {
        if (props?.page?.type) {
            const findType = () => {
                switch (props?.page?.type) {
                    case 'taxonomy_term':
                        switch (props?.page?.bundle) {
                            case 'blog_category':
                                return 'Other';
                            default:
                                return 'Category';
                        }
                    case 'searchResults':
                        return 'Category';
                    case 'commerce_product':
                        return 'Product';

                    case 'node':
                        switch (props.page.bundle) {
                            case 'article':
                                return 'Article';
                            case 'page':
                                return 'Other';
                            case 'landing_page':
                                return 'Category';
                            default:
                                return 'Other';
                        }

                    default:
                        return 'Other';
                }
            };

            const pageType = findType();

            if (pageType === 'Category') {
                return;
            }

            // Tracking.pageView(pageType, isLoggedIn());
        }
    }, [props.page]);

    const router = useRouter();
    const [clientProps, setClientProps] = useState({ ...props });

    useEffect(() => {
        setClientProps({ ...props });

        refreshPageDataByType(props.page);
    }, [props.page]);

    async function refreshPageDataByType(pageProps) {
        let apiGetPageData;
        const locale = router.locale;
        switch (pageProps.type) {
            case 'commerce_product':
                apiGetPageData = getProduct;
                break;
            case 'taxonomy_term':
                switch (pageProps.bundle) {
                    case 'blog_category':
                        apiGetPageData = getBlogListing;
                        break;
                    default:
                        apiGetPageData = getProductCategory;
                        break;
                }
            case 'node':
                switch (pageProps.bundle) {
                    case 'page':
                        apiGetPageData = getBasicPages;
                        break;
                    case 'article':
                        apiGetPageData = getSingleBlog;
                        break;
                    case 'landing_page':
                        apiGetPageData = getLandingPageData;
                        break;
                }
                break;
        }

        if (!apiGetPageData) {
            return false;
        }

        try {
            const { data } = await apiGetPageData(locale, pageProps.id, 0);

            setClientProps({ page: pageProps, pageData: data });
        } catch (err) {
            console.log('error getting page data', err);
        }
    }

    const renderPageBasedOnType = (props) => {
        switch (props?.page?.type) {
            case 'commerce_product':
                return <ProductView {...props.pageData} page={{ ...props.page }} pageData={props.pageData} />;
            case 'taxonomy_term':
                switch (props?.page?.bundle) {
                    // case 'blog_category':
                    //     return (
                    //         <BlogCategoryView
                    //             data={props.pageData}
                    //             categoryId={props.page.id}
                    //             page={{ ...props.page }}
                    //         />
                    //     );
                    default:
                        return <ProductListView {...props.pageData} page={{ ...props.page }} />;
                }
                break;
            // case 'searchResults':
            //     return <SearchProductListView {...props.pageData} page={{ ...props.page }} />;
            case 'node':
                switch (props?.page?.bundle) {
                    case 'landing_page':
                        return <LandingListView {...props.pageData} page={{ ...props.page }} />;
                    // case 'page':
                    //     return <BasicPages {...props.pageData} page={{ ...props.page }} />;
                    // case 'article':
                    //     return <Blog {...props.pageData} page={{ ...props.page }} />;
                }
        }
    };

    return <FadeIn>{renderPageBasedOnType(clientProps)}</FadeIn>;
}
