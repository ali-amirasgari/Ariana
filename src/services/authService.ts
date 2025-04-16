import { API_ROUTES } from "@/routes/apiRoutes";
import { BaseService } from "./baseService";
import { LoginData, LoginResponse, RegisterData, RegisterResponse } from "@/types/auth";
import { AxiosResponse } from "axios";

class AuthService extends BaseService {
  login(data: LoginData): Promise<AxiosResponse<LoginResponse>> {
    return this.getClient().post(API_ROUTES.AUTH.LOGIN, data, {
      maxRedirects: 5
    });
  }
  
  register(data: FormData): Promise<AxiosResponse<RegisterResponse>> {
    return this.getClient().post(API_ROUTES.AUTH.REGISTER, data, {
      maxRedirects: 5,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

const authService = new AuthService();

export default authService;
