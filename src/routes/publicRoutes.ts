import Login from "@/pages/auth/Login";
import { ROUTES } from "./routes";
import Register from "@/pages/auth/Register";

export const publicRoutes = [
  {
    path: ROUTES.PUBLIC.LOGIN.path,
    component: Login,
  },
  {
    path: ROUTES.PUBLIC.REGISTER.path,
    component: Register,
  },
]