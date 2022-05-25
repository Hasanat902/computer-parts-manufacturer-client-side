import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const onSubmit = data => {
        
       fetch(`http://localhost:5000/user/${user?.email}`, {
           method: "PUT",
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(result => {
           if(result.upsertedCount){
               toast.success("Successfully saved your information");
           }
           reset();
       })
        
      };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Update or Give Your Information</h2>
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
                    className="input input-bordered w-full max-w-xs disabled"
                    {...register("email")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Education</span>
                </label>
                <input
                    type="text"
                    placeholder='Give your education information'
                    className="input input-bordered w-full max-w-xs"
                    {...register("education")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input
                    type="text"
                    placeholder='Your city or district'
                    className="input input-bordered w-full max-w-xs"
                    {...register("location")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input
                    type="text"
                    placeholder='Your phone number'
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">LinkedIn</span>
                </label>
                <input
                    type="text"
                    placeholder='Your linkedin profile link'
                    className="input input-bordered w-full max-w-xs"
                    {...register("linkedin")}
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

export default MyProfile;