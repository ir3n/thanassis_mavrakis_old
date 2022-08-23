import { Text, Box, HStack } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { useOutsideClick } from '@chakra-ui/react';
import { LANGUAGES } from 'utils/constants';
import { useRouter } from 'next/router';
import { getPathProps } from 'services/paths';

const LanguageForm = ({ color }) => {
    const ref = useRef();
    const router = useRouter();
    const selectedLanguage = router.locale;

    const displayedLanguage = LANGUAGES.find((language) => language.id === selectedLanguage)?.label;

    const handleLanguageChange = async (selectedLocale) => {
        try {
            const { data: pageProps } = await getPathProps(getRealLocale(router.locale), router.asPath);

            let path;

            switch (pageProps?.type) {
                case 'commerce_product':
                    path = `/product/${pageProps.id}`;
                    break;
                case 'taxonomy_term':
                    path = `/taxonomy/term/${pageProps.id}`;
                    break;
                case 'node':
                    path = `/node/${pageProps.id}`;
                    break;
                default:
                    router.push(router.asPath, router.asPath, { locale: selectedLocale });
                    break;
            }
            const { data } = await getPathProps(selectedLocale, path);
            router.push(data.path, data.path, { locale: false });
        } catch (err) {
            router.push(router.asPath, router.asPath, { locale: selectedLocale });
        }
    };

    return (
        <HStack color={color}>
            <Text fontSize="10" fontWeight="bold" cursor="default">
                {displayedLanguage}
            </Text>
            <Text fontSize="10">/</Text>
            {LANGUAGES.map(
                (language) =>
                    language.id !== selectedLanguage && (
                        <Text
                            fontSize="10"
                            cursor="pointer"
                            key={language.id}
                            onClick={() => handleLanguageChange(language.id)}
                        >
                            {language.label}
                        </Text>
                    )
            )}
        </HStack>
    );
};

export default LanguageForm;
