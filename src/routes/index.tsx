import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRouteProvider from "./PrivateRouteProvider";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import AuthLayout from "@/components/layouts/AuthLayout";
import AppLayout from "@/components/layouts/AppLayout";
import { ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to login */}
        <Route path="/" element={<Navigate to={ROUTES.PUBLIC.LOGIN.path} replace />} />
        
        <Route element={<AuthLayout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route element={<AppLayout />}>
          <Route element={<PrivateRouteProvider />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
