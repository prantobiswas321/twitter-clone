// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useUser } from '../contextApi/UserContext';

// const PrivateRoute = ({ path, element: Element }) => {
//     const { isLoggedIn } = useUser();

//     if (!isLoggedIn) {
//         // If the user is not logged in, redirect to the login page
//         return <Navigate to="/login" replace />;
//     }

//     return <Route path={path} element={<Element />} />;
// };

// export default PrivateRoute;


import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from '../contextApi/UserContext';

const PrivateRoute = ({ component, ...rest }) => {
    // const { isLoggedIn } = useUser();
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;