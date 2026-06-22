import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}   

function ProductDetails() {
    
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [productId]);

    return ( 
        <>
            <h1>Product Details Page</h1>
            <h3>Product ID: {productId}</h3>
            <h3>Title: {product?.title}</h3>
            <p>Description: {product?.description}</p>
            <p>Price: ${product?.price.toFixed(2)}</p>
        </>
     );
}

export default ProductDetails;