import { useState, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ROUTES } from "@/routes/routes";
import { useGetUserInfo } from "@/queries/user/queries";
import baseService from "@/services/baseService";
import ArianaLogo from "@/assets/images/arianaLogo.svg";
import LogoutIcon from "@/assets/images/logout.svg";
import LogoutModal from "../LogoutModal";
import UserProfile from "../UserProfile";
import UserProfileSkeleton from "../skeleton/UserProfileSkeleton";

function AppLayout() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const { data: userInfo, isLoading } = useGetUserInfo();

  const handleLogout = () => {
    console.log("Logging out");
    setShowLogoutModal(false);
    baseService.removeToken();
    navigate(ROUTES.PUBLIC.LOGIN.path);
  };
  
  const fullName = useMemo(() => {
    if (!userInfo) return '';
    return `${userInfo.first_name || ''} ${userInfo.last_name || ''}`.trim();
  }, [userInfo]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[240px] bg-[var(--tertiary-color)] flex flex-col justify-between border-r border-[var(--border-color)]">
        {isLoading ? (
          <UserProfileSkeleton />
        ) : (
          <UserProfile
            name={fullName}
            username={userInfo?.username}
            avatar={userInfo?.avatar}
          />
        )}
        <div className="p-2">
          <Button
            variant="warning"
            className="w-full"
            onClick={() => setShowLogoutModal(true)}
          >
            <img src={LogoutIcon} alt="Logout" className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="h-[54.45px] bg-[var(--tertiary-color)] border-b border-[var(--border-color)] flex items-center justify-between px-6">
          <img
            src={ArianaLogo}
            alt="Ariana Logo"
            className="w-[118px] h-[30.45px]"
          />
        </div>

        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default AppLayout;
