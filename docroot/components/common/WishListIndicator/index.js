import { memo, useEffect, useState } from 'react';
import { Popover, PopoverContent, Box, PopoverCloseButton, Text, PopoverTrigger } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useUser from 'hooks/useUser';
import Heart from 'components/icons/Heart';
// import LoginForm from 'components/common/UserProfile/LoginForm';
import useWishlist from 'hooks/useWishlist';

export const WishListIndicator = ({ boxSize }) => {
    const router = useRouter();
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const closeFavorite = () => setFavoriteOpen(false);
    const openFavorite = () => setFavoriteOpen(true);
    const { wishListData } = { wishListData: [] };
    const { userData } = useUser();

    const handleClickForLoggedInUsers = () => router.push('/user/wishlist');

    useEffect(() => {
        setFavoriteOpen(false);
    }, [router.asPath]);

    return (
        <Popover isLazy _focus={{ boxShadow: 'none' }} boxShadow={'none'} isOpen={favoriteOpen} onClose={closeFavorite}>
            <PopoverTrigger>
                <Box
                    display={'flex'}
                    mr={{ base: '15px', sm: '15px', lg: '35px' }}
                    _hover={{ cursor: 'pointer' }}
                    position={'relative'}
                >
                    {userData?.id ? (
                        <>
                            <Heart
                                onClick={handleClickForLoggedInUsers}
                                boxSize={boxSize ? boxSize : null}
                                color={'white'}
                            />
                            {wishListData && wishListData.length > 0 && (
                                <Box
                                    onClick={handleClickForLoggedInUsers}
                                    className={'ammMiniCart__indicator'}
                                    bg={'black'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    borderRadius={'50%'}
                                    position={'absolute'}
                                    bottom={'-8px'}
                                    right={'400px'}
                                    padding={'3px'}
                                    w={'18px'}
                                    h={'18px'}
                                    lineHeight={1}
                                >
                                    <Text fontSize={'10px'} fontWeight={'bold'} color={'black'} lineHeight={1}>
                                        {(wishListData && wishListData.length) || 0}
                                    </Text>
                                </Box>
                            )}{' '}
                        </>
                    ) : (
                        <>
                            <Heart onClick={openFavorite} boxSize={boxSize ? boxSize : null} color={'white'} />{' '}
                            {wishListData && wishListData.length > 0 ? (
                                <Box
                                    className={'ammMiniCart__indicator'}
                                    bg={'black'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    borderRadius={'50%'}
                                    position={'absolute'}
                                    bottom={'-8px'}
                                    right={'400px'}
                                    padding={'3px'}
                                    w={'18px'}
                                    h={'18px'}
                                    lineHeight={1}
                                    onClick={openFavorite}
                                >
                                    <Text fontSize={'10px'} fontWeight={'bold'} color={'black'} lineHeight={1}>
                                        {(wishListData && wishListData.length) || 0}
                                    </Text>
                                </Box>
                            ) : null}
                        </>
                    )}
                </Box>
            </PopoverTrigger>
            {/* <PopoverContent
                borderRadius={'none'}
                boxShadow={'none'}
                outline={'none'}
                px={'20px'}
                borderColor={'brand.900'}
                maxW={'100%'}
                minW={'320px'}
                _focus={{ boxShadow: 'none', outline: 'none' }}
                position={'relative'}
                backgroundColor={'white'}
            >
                <PopoverCloseButton />
            </PopoverContent> */}
        </Popover>
    );
};

export default memo(WishListIndicator);
