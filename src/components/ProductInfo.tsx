import { FC } from 'react';
import { Product } from '../app.typedefs';

interface Props {
  product: Product;
}

export const ProductInfo: FC<Props> = ({ product }) => {
  return (
    <>{`${product.name}`}</>
  );
};
