import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouteProvider from "./PrivateRouteProvider";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import AuthLayout from "@/components/AuthLayout";
import AppLayout from "@/components/AppLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
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
