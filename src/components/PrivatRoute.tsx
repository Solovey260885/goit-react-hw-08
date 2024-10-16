import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import React, { Suspense } from "react";

interface PrivateRouteProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  redirectTo: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
