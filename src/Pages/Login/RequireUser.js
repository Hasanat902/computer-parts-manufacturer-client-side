import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import Loading from '../Shared/Loading';

const RequireAdmin = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const [users, usersLoading] = useUser(user);
    const location = useLocation();

    if(loading || usersLoading){
        return <Loading></Loading>;
    }

    if(!user || !users){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;