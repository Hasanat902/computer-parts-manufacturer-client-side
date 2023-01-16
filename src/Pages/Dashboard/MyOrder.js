import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [cancelOrder, setCancelOrder] = useState(null);

  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://computer-parts-manufacturer-server-side.onrender.com/order?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={index}
                order={order}
                index={index}
                refetch={refetch}
                setCancelOrder={setCancelOrder}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {cancelOrder && (
        <DeleteConfirmModal
          cancelOrder={cancelOrder}
          refetch={refetch}
          setCancelOrder={setCancelOrder}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default MyOrder;
