import { FC } from 'react';
import { PreparedOrder } from '../app.typedefs';
import { ProductsList } from './ProductList';
import { UserInfo } from './UserInfo';

interface Props {
  order: PreparedOrder;
}

export const Order: FC<Props> = ({ order }) => {
  const { title, user, products } = order;

  return (
    <div className="ui content">
      <div className="ui description">
        <p>
          {`${title} - `}
          {
            user
              ? (<UserInfo user={user} />)
              : '(Unknown user)'
          }
        </p>

        {
          products.length
            ? (<ProductsList products={products} />)
            : (<p>No products in order</p>)
        }
      </div>
    </div>
  );
};
