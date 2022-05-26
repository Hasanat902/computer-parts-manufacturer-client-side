import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {

    const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }

    return (
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
                    products.map((product, index) => <ProductRow key={product._id} product={product} index={index}></ProductRow>)
                }
            </tbody>
        </table>
        </div>
    );
};

export default ManageProducts;