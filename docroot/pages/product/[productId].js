import useProduct from 'hooks/useProduct';
import { useRouter } from 'next/router';
import ProductPage from 'components/product/ProductPage';

export default function Product() {
    const router = useRouter();
    const productId = router?.query?.productId;

    const { productData } = useProduct(productId);

    return (
        <>
            <ProductPage productData={productData} />
        </>
    );
}
