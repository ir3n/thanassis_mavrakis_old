import { UnorderedList, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const MenuItemSidebar = ({ data, borderLine, shops }) => {
    return (
        <UnorderedList listStyleType={'none'} ml={'0'} pb={'30px'} borderBottom={borderLine ? '1px solid #919191' : ''}>
            {data?.map(({ title, cleanUrl, id }, index) => {
                {
                    shops ? (cleanUrl = `/shops/${id}`) : '';
                }
                return (
                    <ListItem pb={'4px'} key={`item-${index}`}>
                        <NextLink passHref href={cleanUrl}>
                            <Link _hover={{ color: 'brand' }}>{title}</Link>
                        </NextLink>
                    </ListItem>
                );
            })}
        </UnorderedList>
    );
};

export default MenuItemSidebar;
