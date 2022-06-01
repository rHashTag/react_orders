import { FC } from 'react';
import { PreparedOrder } from '../app.typedefs';
import { Order } from './Order';

interface Props {
  orders: PreparedOrder[];
}

export const OrdersList: FC<Props> = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <div className="ui card" key={order.id}>
          <Order order={order} />
        </div>
      ))}
    </div>
  );
};
