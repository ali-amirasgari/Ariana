import { memo } from "react";
import UserIcon from "@/assets/images/user.png";

interface UserProfileProps {
  name: string;
  username: string | undefined;
  avatar: string | undefined;
}

const UserProfile = memo((props: UserProfileProps) => {
  const { name, username, avatar } = props;

  return (
    <div className="flex flex-col gap-3 items-center p-6">
      <img
        src={avatar || UserIcon}
        alt="User"
        className="w-[64px] h-[64px] rounded-full"
      />
      <div className="flex flex-col gap-1 items-center">
        <h2 className="h2">{name}</h2>
        <p className="user-name">{username}</p>
      </div>
    </div>
  );
});

export default UserProfile;
