import './App.scss';
import {
  PreparedOrder, Order, User, Product,
} from './app.typedefs';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';
import { OrdersList } from './components';

function prepareOrders(
  orders: Order[],
  users: User[],
  products: Product[],
): PreparedOrder[] {
  return orders.map(order => ({
    ...order,
    user: users.find(user => order.userId === user.id),
    products: products.filter(product => product.orderId === order.id),
  }));
}

const preparedOrders: PreparedOrder[] = prepareOrders(
  ordersFromServer, usersFromServer, productsFromServer,
);

function App() {
  return (
    <>
      <OrdersList orders={preparedOrders} />
    </>
  );
}

export default App;
