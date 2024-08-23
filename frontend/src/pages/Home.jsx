import ProductCard from "../component/ProductCard";

function Home({ products, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='text-3xl font-bold mb-8'>Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;