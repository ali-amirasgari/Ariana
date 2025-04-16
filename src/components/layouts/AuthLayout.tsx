import { Link, Outlet, useLocation } from "react-router-dom";
import ArianaLogo from "@/assets/images/arianaLogo.svg";
import { ROUTES } from "@/routes/routes";

export default function AuthLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border-2 border-[var(--border-color)] rounded-xl p-5 max-w-[348px] w-full min-h-[504px]">
        <div className="flex justify-center items-center mb-8 mt-2">
          <img src={ArianaLogo} alt="Ariana Logo" className="w-[80%]" />
        </div>
        <Outlet />
        <div className="flex justify-center items-center mt-4">
          {pathname === ROUTES.PUBLIC.LOGIN.path ? (
            <>
              <p className="body2 mr-1">Don't have an account?</p>
              <Link
                to={ROUTES.PUBLIC.REGISTER.path}
                className="body2 underline"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <p className="body2 mr-1">Already have an account?</p>
              <Link to={ROUTES.PUBLIC.LOGIN.path} className="body2 underline">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
