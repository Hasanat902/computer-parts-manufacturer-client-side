import React from "react";

const ProductRow = ({ product, index }) => {

    const {name, price} = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td><button class="btn btn-xs btn-error">Delete</button></td>
    </tr>
  );
};

export default ProductRow;
