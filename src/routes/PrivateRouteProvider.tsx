import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";
import baseService from "@/services/baseService";

const PrivateRouteProvider = () => {
  const isAuthenticated = baseService.getToken() !== null;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.PUBLIC.LOGIN.path} replace />;
  }

  return <Outlet />;
};

export default PrivateRouteProvider;
