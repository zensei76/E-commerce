import { Link } from 'react-router-dom'; 
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {
  return (
    <div className='group relative flex flex-col h-[400px]  bg-gray-200 rounded-xl '>
      <div className='w-full h-64 bg-white rounded-t-xl overflow-hidden group-hover:opacity-75'>
        <Link to={`/product/${product.id}`} className='block h-full'>
          <div className='relative w-full h-full'>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-full object-contain'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
      </div>
      <div className='px-3 mt-4 flex-grow flex flex-col justify-between'>
        <div>
          <h3 className='text-sm text-gray-700 line-clamp-2'>
            <Link to={`/product/${product.id}`}>
              <span aria-hidden='true' className='absolute inset-0' />
              {product.title}
            </Link>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-900'>
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <AddToCartButton product={product} variant='fullWidth' />
    </div>
  );
}
