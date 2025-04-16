import { ROUTES } from "@/routes/routes";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { toast } from "react-toastify";

export class BaseService {
  private static api: AxiosInstance | null = null;
  private static readonly TOKEN_KEY = "ariana-token";

  constructor() {
    if (BaseService.api) {
      return;
    }

    this.initializeClient();
    this.setupInterceptors();
  }

  private initializeClient(): void {
    const client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    BaseService.api = client;

    const token = this.getToken();
    if (token) {
      this.updateToken(token);
    }
  }

  private setupInterceptors(): void {
    const client = this.getClient();

    client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) =>
        this.handleRequestInterceptor(config),
      (error: AxiosError) => Promise.reject(error)
    );

    client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => this.handleResponseError(error)
    );
  }

  private handleRequestInterceptor(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {
    const token = this.getToken();
    if (token && config.headers) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  }

  private handleResponseError(error: AxiosError): Promise<never> {
    const status = error?.response?.status;
    // const data = error?.response?.data as { message?: string } | undefined;

    if (status === 401) {
      this.removeToken();
      window.location.replace(ROUTES.PUBLIC.LOGIN.path);
    } else if (status === 501) {
      toast.error("Server Error: The server cannot fulfill this request");
    } else if (status && status >= 500) {
      toast.error("Server Error: Something went wrong on the server");
    }

    return Promise.reject(error);
  }

  public getToken(): string | null {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem(BaseService.TOKEN_KEY);
  }

  public setToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(BaseService.TOKEN_KEY, token);
      this.updateToken(token);
    }
  }

  private updateToken(token: string): void {
    this.getClient().defaults.headers.common[
      "Authorization"
    ] = `Token ${token}`;
  }

  public removeToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(BaseService.TOKEN_KEY);
      sessionStorage.removeItem(BaseService.TOKEN_KEY);
    }

    delete this.getClient().defaults.headers.common["Authorization"];
  }

  public getClient(): AxiosInstance {
    if (!BaseService.api) {
      throw new Error("The HTTP client is not initialized");
    }

    return BaseService.api;
  }
}

const baseService = new BaseService();

export default baseService;
