import { Box, Text, Image, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Container from 'components/common/Container';
import FilterItem from './FilterItem';

export default function Filter() {
    const { t } = useTranslation('designers');
    const router = useRouter();

    return (
        <>
            <Box py={'30px'} borderBottom={'0.5px solid #CDCDCD'}>
                <Container>
                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={{ sm: 'column', lg: 'row' }}>
                        <Box display={'flex'} mb={{ sm: '18px', lg: '0' }}>
                            {/* <FilterItem />
                        <FilterItem />
                        <FilterItem /> */}
                            <Box display={'flex'} alignItems={'center'} borderRight={'1px solid #919191'} mr={'12px'}>
                                <Text textStyle={'sm'} pr={'28px'} textTransform={'uppercase'}>
                                    {t('letters')}
                                </Text>
                                <Link>
                                    <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} mr={'12px'} />
                                </Link>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} borderRight={'1px solid #919191'} mr={'12px'}>
                                <Text textStyle={'sm'} pr={'28px'} textTransform={'uppercase'}>
                                    {t('technic')}
                                </Text>
                                <Link>
                                    <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} mr={'12px'} />
                                </Link>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} borderRight={'1px solid #919191'} mr={'12px'}>
                                <Text textStyle={'sm'} pr={'28px'} textTransform={'uppercase'}>
                                    {t('material')}
                                </Text>
                                <Link>
                                    <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} mr={'12px'} />
                                </Link>
                            </Box>
                        </Box>

                        {/* <Box display={'flex'} alignItems={'center'} borderLeft={'1px solid #919191'}>
                            <Text textStyle={'sm'} p={'0 28px 0 12px'} textTransform={'uppercase'}>
                                {t('classification')}
                            </Text>
                            <Link>
                                <Image
                                    src={'/assets/arrowCarousel.svg'}
                                    w={'12px'}
                                    h={'12px'}
                                    alt={'add'}
                                    mr={'12px'}
                                    transform={'rotate(90deg)'}
                                />
                            </Link>
                        </Box> */}
                    </Box>
                </Container>
            </Box>
        </>
    );
}
