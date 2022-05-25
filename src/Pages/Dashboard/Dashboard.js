import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);
    const [users] = useUser(user);

    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-2xl text-purple-500 font-bold'>Welcome to your DashBoard</h2>
            <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Profile</Link></li>
            {users && <li><Link to='/dashboard/myOrder'>My Orders</Link></li>}
            {users && <li><Link to='/dashboard/addReview'>Add a Review</Link></li>}
            {admin && <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>}
            {admin && <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>}
           {admin && <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>}
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;