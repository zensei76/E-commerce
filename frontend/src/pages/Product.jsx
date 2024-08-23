import { useState } from "react";
import { useEffect } from "react";
import { getProduct } from "../api/products";
import { useParams } from "react-router-dom";
import AddToCartButton from "../component/AddToCartButton";

const Product = () => {


	const [product, setProduct] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();


	useEffect(() => {
		const fetchData = async () => {
			try {
				const productsData = await getProduct(id);
				setProduct(productsData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
	return (
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='md:w-1/2 h-[500px]'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-contain'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='md:w-1/2'>
        <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <p className='text-2xl font-bold mb-4'>${product.price.toFixed(2)}</p>
        <AddToCartButton product={product} variant='default' />
      </div>
    </div>
	);
};

export default Product;
