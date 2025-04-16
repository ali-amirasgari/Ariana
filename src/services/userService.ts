import { API_ROUTES } from "@/routes/apiRoutes";
import { BaseService } from "./baseService";
import { AxiosResponse } from "axios";
import { UserProfile } from "@/types/user";

class UserService extends BaseService {
  getUserInfo(): Promise<AxiosResponse<UserProfile>> {
    return this.getClient().get(API_ROUTES.USER.GET_PROFILE);
  }
}

const userService = new UserService();

export default userService;
