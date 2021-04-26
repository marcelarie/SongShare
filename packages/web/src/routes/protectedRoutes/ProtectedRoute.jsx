import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ ...props }) {
    const isAuthenticated = useSelector(store => store.auth.isAuthenticated);

    return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
}

export default ProtectedRoute;
