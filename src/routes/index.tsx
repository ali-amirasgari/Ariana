import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouteProvider from "./PrivateRouteProvider";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import AuthLayout from "@/components/AuthLayout";

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
        <Route element={<PrivateRouteProvider />}>
          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
