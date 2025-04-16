import userService from "@/services/userService";
import { UserProfile } from "@/types/user";

export async function getUserInfo(): Promise<UserProfile> {
  try {
    const response = await userService.getUserInfo();

    return response.data;
  } catch (error) {
    console.error("Can't get user profile", error);
    throw error;
  }
}
