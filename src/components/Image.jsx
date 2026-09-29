import product from '../product';

function Image() {
  return (
    <img 
      src={product.image} 
      alt={product.name}
      className="product-image img-fluid"
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    />
  );
}

export default Image;