import { memo } from "react";

const UserProfileSkeleton = memo(() => {
  return (
    <div className="flex flex-col gap-3 items-center p-6">
      {/* Avatar skeleton */}
      <div className="w-[64px] h-[64px] rounded-full bg-slate-200 animate-pulse" />
      
      {/* Name and username skeletons */}
      <div className="flex flex-col gap-1 items-center w-full">
        <div className="h-5 w-24 bg-slate-200 rounded animate-pulse" />
        <div className="h-4 w-16 bg-slate-200 rounded animate-pulse" />
      </div>
    </div>
  );
});

export default UserProfileSkeleton; 