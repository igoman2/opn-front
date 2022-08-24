import Router, { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useAuthStore } from "../store";

interface IPrivateRouteProps {
  protectedRoutes: string[];
  children: ReactElement;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  protectedRoutes,
  children,
}) => {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!isLoggedIn() && pathIsProtected) {
      router.push("/login");
    }
  }, [isLoggedIn(), pathIsProtected, router]);

  return children;
};

export default PrivateRoute;
