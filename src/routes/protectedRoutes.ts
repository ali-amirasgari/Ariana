import DashBoard from "@/pages/app/DashBoard";
import { ROUTES } from "./routes";

export const protectedRoutes = [
  {
    path: ROUTES.PROTECTED.DASHBOARD.path,
    component: DashBoard,
  },
];
