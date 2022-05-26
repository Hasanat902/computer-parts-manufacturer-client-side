import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);

    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-xl font-bold my-5'>Delete Product from database also from home page</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ProductRow key={product._id} product={product} index={index} setDeleteProduct={setDeleteProduct}></ProductRow>)
                    }
                </tbody>
            </table>
            </div>
            {
                deleteProduct && <ProductDeleteModal deleteProduct={deleteProduct} refetch={refetch} setDeleteProduct={setDeleteProduct}></ProductDeleteModal>
            }
        </div>
    );
};

export default ManageProducts;