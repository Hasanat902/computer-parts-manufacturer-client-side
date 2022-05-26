import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, setDeleteProduct }) => {

    const {_id, name, price} = product;

    

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
         <label onClick={() => setDeleteProduct(product)} for="product-delete-modal" class="btn btn-xs btn-error">Delete</label>
      </td>
    </tr>
  );
};

export default ProductRow;
