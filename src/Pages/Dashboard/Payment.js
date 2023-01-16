import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0hIOGcm0pknPnWJaBWEvu0I4foTqzhjO58cKZS9jMVVzy51E7T7hXf2KdTOHkOpgS6Q4DMNUPFPaTdwCinqS2q00LQOAF62s"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://computer-parts-manufacturer-server-side.onrender.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.name}</p>
          <h2 class="card-title">Please pay for: {order.product}</h2>
          <p className="font-bold">Please Pay: ${order.price}</p>
          <p>Address: {order.address}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
