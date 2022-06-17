import useTranslation from 'next-translate/useTranslation';
import { Box, Text } from '@chakra-ui/react';
import ArrowDownIcon from '../../public/assets/Chevron-down.svg';
import { useState, useRef } from 'react';
import { useOutsideClick } from '@chakra-ui/react';

const ProductSize = ({ sizes, handleSizeSelection, defaultSize }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [size, setSize] = useState('');
    const ref = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation('product');

    const handler = () => {
        setIsModalOpen(false);
        setIsClicked(false);
    };

    useOutsideClick({
        ref: ref,
        handler: handler
    });

    const pickSizeHandler = (e) => {
        setIsClicked(!isClicked);
        setIsModalOpen(false);
        setSize(e.target.innerText);
        const product = sizes.filter((product) => product.id.toString() === e.target.id);
        handleSizeSelection(product);
    };

    return (
        <Box
            marginBottom={'24px'}
            position="relative"
            width={'fit-content'}
            onClick={() => setIsModalOpen(!isModalOpen)}
            ref={ref}
        >
            <Box
                width="178px"
                height="48px"
                borderWidth={'1px'}
                borderStyle="solid"
                borderColor={'darkgrey'}
                borderRadius="2px"
                position={'relative'}
                d="flex"
                justifyContent={'space-between'}
                alignItems="center"
                paddingX="16px"
                onClick={() => {
                    setIsClicked(!isClicked);
                }}
                cursor={'pointer'}
                userSelect={'none'}
            >
                {size === '' ? `${defaultSize?.name} ${t('cm')}` : `${size} ${t('cm')}`}
                <Box>
                    <ArrowDownIcon />
                </Box>
            </Box>
            <Box position="absolute" zIndex={100} bg="white">
                {isModalOpen &&
                    sizes?.map(({ name, id, price, sku }) => (
                        <Box
                            width="178px"
                            key={id}
                            id={id}
                            dataId={sku}
                            height="48px"
                            borderWidth={'1px'}
                            borderStyle="solid"
                            className="SIZE"
                            borderColor={'darkgrey'}
                            borderRadius="2px"
                            borderTop={'none'}
                            paddingLeft="16px"
                            d="flex"
                            alignItems={'center'}
                            _hover={{ bg: 'black', color: 'white' }}
                            cursor={'pointer'}
                            userSelect={'none'}
                            onClick={pickSizeHandler}
                        >
                            {name}
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default ProductSize;
