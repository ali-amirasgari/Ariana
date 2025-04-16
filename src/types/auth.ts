export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterData {
  avatar: File;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
}
