import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const onSubmit = data => {
        
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                toast.success("Your review is successfully submitted");
            }
            reset();
        })
        
      };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Give Your Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder='Your Name'
                    className="input input-bordered w-full max-w-xs disabled"
                    {...register("name")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Ratings</span>
                </label>
                <input
                    type="text"
                    placeholder='Give your ratings out of 5'
                    className="input input-bordered w-full max-w-xs"
                    {...register("ratings")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <input
                    type="textarea"
                    placeholder='Write your review'
                    className="input input-bordered w-full max-w-xs"
                    {...register("description")}
                />
                </div>
                <input
                className="btn w-full max-w-xs text-white mt-5"
                type="submit"
                value="Submit"
                />
            </form>
            </div>
        </div>
    );
};

export default AddReview;