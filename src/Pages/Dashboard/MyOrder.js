import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map((order, index) => <OrderRow key={index} order={order} index={index}></OrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
