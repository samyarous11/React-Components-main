import product from '../product';

function Price() {
  return <h4 className="product-price text-primary">{product.price}</h4>;
}

export default Price;