import { HStack } from '@chakra-ui/react';
import SocialIcon from './SocialIcon';
import useTranslation from 'next-translate/useTranslation';

const SocialIcons = ({ arr }) => {
    const { t } = useTranslation('footer');

    return (
        <HStack spacing="20px" justify="end">
            {arr?.map((item) => (
                <SocialIcon name={item.name} url={item.url} />
            ))}
        </HStack>
    );
};

export default SocialIcons;
