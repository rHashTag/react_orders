export interface Order {
  id: number,
  userId: number,
  title: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  orderId: number;
}

export interface PreparedOrder extends Order {
  user?: User;
  products: Product[];
}
