import { Text, Box } from '@chakra-ui/react';
import Arrow from '../../../public/assets/smallArrowDown.svg';
import LanguageIcon from '../../../public/assets/12.svg';
import { useState, useRef } from 'react';
import { useOutsideClick } from '@chakra-ui/react';
import { LANGUAGES } from 'utils/constants';
import { useRouter } from 'next/router';
import { getPathProps } from 'services/paths';

const LanguageForm = () => {
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const selectedLanguage = router.locale;

    const displayedLanguage = LANGUAGES.find((language) => language.id === selectedLanguage)?.label;

    const handler = () => {
        setIsModalOpen(false);
        setIsClicked(false);
    };

    useOutsideClick({
        ref: ref,
        handler: handler
    });

    const btnHandler = () => {
        setIsClicked(!isClicked);
        setIsModalOpen(false);
    };

    const handleLanguageChange = async (selectedLocale) => {
        try {
            btnHandler();

            const { data: pageProps } = await getPathProps(getRealLocale(router.locale), router.asPath);

            let path;

            switch (pageProps.type) {
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
        <>
            <Box position={'relative'} onClick={() => setIsModalOpen(!isModalOpen)} ref={ref}>
                <Box as="button" d={'flex'} alignItems="center" onClick={() => setIsClicked(!isClicked)}>
                    <LanguageIcon />
                    <Text textStyle={'caption'}>{displayedLanguage}</Text>
                    <Box ml="2px">
                        <Arrow color="black" />
                    </Box>
                </Box>
                {isModalOpen && (
                    <Box as="button" bg="black" position={'absolute'} top="20px" right="0px" zIndex="10">
                        {LANGUAGES.map(
                            (language) =>
                                language.id !== selectedLanguage && (
                                    <Text
                                        key={language.id}
                                        textStyle={'caption'}
                                        color={'white'}
                                        padding="10px 14px"
                                        onClick={() => handleLanguageChange(language.id)}
                                    >
                                        {language.label}
                                    </Text>
                                )
                        )}
                    </Box>
                )}
            </Box>
        </>
    );
};

export default LanguageForm;
