import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ cancelOrder, refetch, setCancelOrder }) => {
  const { product, _id } = cancelOrder;

  const handleDelete = (id) => {
    fetch(
      `https://computer-parts-manufacturer-server-side.onrender.com/order/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product is deleting successfully");
          setCancelOrder(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete {product} order?
          </h3>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              class="btn btn-xs btn-error"
            >
              Cancel
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
