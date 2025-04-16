import { Outlet } from "react-router-dom";
import { Button } from "./ui/button";
import UserIcon from "@/assets/images/user.png";
import ArianaLogo from "@/assets/images/arianaLogo.svg";

function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[240px] bg-[var(--tertiary-color)] flex flex-col justify-between border-r border-[var(--border-color)]">
        <div className="flex flex-col gap-3 items-center p-6">
          <img
            src={UserIcon}
            alt="User"
            className="w-[64px] h-[64px] rounded-full"
          />
          <div className="flex flex-col gap-1 items-center">
            <h2 className="h2">Ali Amirasgari</h2>
            <p className="user-name">@Ali</p>
          </div>
        </div>
        <div className="p-2">
          <Button
            variant="warning"
            className="w-full"
            onClick={() => console.log("Logout clicked")}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main content area */}
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
    </div>
  );
}

export default AppLayout;
