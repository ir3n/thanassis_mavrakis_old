import { Box, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from './TitleSection';

const Shops = ({ data }) => {
    const { t } = useTranslation('account');

    return (
        <Box>
            {data?.map(({ title }, index) => {
                return <Box key={`shop-${index}`}>{title}</Box>;
            })}
        </Box>
    );
};

export default Shops;
