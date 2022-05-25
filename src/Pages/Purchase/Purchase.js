import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {

    const {productId} = useParams();

    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

    useEffect( () => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        
        fetch(`http://localhost:5000/order`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                toast.success("Order Completed Successfully");
            }
        })
        reset();
      };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-12">
                <figure><img src={product.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="text-gray-400">{product.description}</p>
                    <p className="font-bold text-gray-400">
                    Minimum Order: {product.minOrderQuantity} pcs
                    </p>
                    <p className="font-bold text-gray-400">
                    Available Quantity: {product.availableQuantity}
                    </p>
                    <p className="font-bold text-gray-400">Price: ${product.price}</p>               
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-12">
                <div className="card-body">
                    <h2 className='text-center text-2xl text-blue-400 font-bold'>Order Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    value={user?.displayName}
                    className="input input-bordered w-full max-w-xs disabled"
                    {...register("name")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    value={user?.email}
                    className="input input-bordered w-full max-w-xs"
                    {...register("email")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input
                    type="text"
                    placeholder='Your Address'
                    className="input input-bordered w-full max-w-xs"
                    {...register("address")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input
                    type="text"
                    placeholder='Your Phone Number'
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Please write your product name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("product")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                    min: {
                        value: `${product.minOrderQuantity}`,
                        message: `You have to purchase at least ${product.minOrderQuantity} pcs`,
                    },
                    max: {
                        value: `${product.availableQuantity}`,
                        message: `You can purchase only ${product.availableQuantity} pcs`,
                    },
                    })}
                />
                <label className="label">
                    {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-red-500 font-bold">
                        {errors.quantity.message}
                    </span>
                    )}
                    {errors.quantity?.type === "max" && (
                    <span className="label-text-alt text-red-500 font-bold">
                        {errors.quantity.message}
                    </span>
                    )}
                </label>
                </div>
                <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Place Order"
                />
            </form>
                    </div>
                </div>
            </div>
    );
};

export default Purchase;