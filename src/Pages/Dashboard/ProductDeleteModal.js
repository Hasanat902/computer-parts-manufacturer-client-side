import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({deleteProduct, refetch, setDeleteProduct}) => {

    const {_id, name} = deleteProduct;

    const handleDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('Product is deleted successfully');
                setDeleteProduct(null);
                refetch();
            }
        })
    }

    return (
        <div>

            <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Are you sure you want to delete {name}?</h3>
                <div class="modal-action">
                <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button>
                <label for="product-delete-modal" class="btn btn-xs">Close</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDeleteModal;