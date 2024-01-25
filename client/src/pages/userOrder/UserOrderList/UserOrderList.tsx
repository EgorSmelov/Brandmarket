import React, { useEffect, useState } from 'react';
import OrdersService from '../../../services/ordersService';
import UserOrderTable from './UserOrderTable';

export default function UserOrderList(): JSX.Element {
  const [orders, setOrders] = useState([]);

  console.log(orders);

  useEffect(() => {
    OrdersService.getOrders()
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return <UserOrderTable orders={orders} />;
}
