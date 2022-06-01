import { FC } from 'react';
import { Product } from '../app.typedefs';
import { ProductInfo } from './ProductInfo';

interface Props {
  products: Product[];
}

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <ul className="ui list">
      {products.map(product => (
        <li key={product.id}>
          <ProductInfo product={product} />
        </li>
      ))}
    </ul>
  );
};
