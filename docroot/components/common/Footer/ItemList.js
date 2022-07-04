import { ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const ItemList = ({ title, relative }) => {
    return title ? (
        <ListItem pb="0px">
            <NextLink passHref href={relative} prefetch={false}>
                <Link textStyle="md">{title}</Link>
            </NextLink>
        </ListItem>
    ) : null;
};

export default ItemList;
