import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import React, { Suspense } from "react";

interface RestrictedRouteProps {
  component: React.LazyExoticComponent<React.ComponentType<{}>>;
  redirectTo: string;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default RestrictedRoute;
