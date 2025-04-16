import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./functions";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 3, // 3 minutes
    refetchOnWindowFocus: false,
  });
};
