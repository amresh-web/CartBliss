import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);
  const isLoading = useSelector((state) => state.auth.loading);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
