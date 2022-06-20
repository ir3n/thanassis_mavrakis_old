const nextTranslate = require('next-translate');
//const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const moduleExports = withPWA(
    nextTranslate({
        swcMinify: true,
        compiler: {
            removeConsole: process.env.NODE_EV === 'production' ? true : false
        },
        pwa: {
            dest: 'public',
            disable: process.env.NODE_ENV === 'development',
            runtimeCaching
        },
        async redirects() {
            /**
             * This is a hack
             * Next doesn't provide a straight way to always include the locale to the url when the default locale is chosen
             * So we make a fakeDefaultLocale(my) and make it redirect always to the real default locale
             * We should change this once a real solution is available
             */
            return [
                {
                    source: '/my',
                    destination: '/el',
                    locale: false,
                    permanent: true
                },
                {
                    //NOTE prosthesa edw ta "_next" kai "assets" gia kapoio logo ta evaze ws path='/assets' kai path='_next/static/development'
                    //redirect all paths that are not /api or /feeds to the default locale
                    source: '/my/:slug((?!api|sitemap.xml|feeds|sw|robots|workbox|manifest|_next|assets).*)',
                    destination: '/el/:slug*',
                    locale: false,
                    permanent: true
                }
            ];
        },
        images: {
            domains: ['benakishop-backend.rkpt.dev']
        },
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
            });

            return config;
        }
    })
);

module.exports = moduleExports;
