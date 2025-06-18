export interface EmailFieldProps {
  email: string;
  emailError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordFieldProps {
  password: string;
  passwordError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface LoginInput {
  email: string;
  password: string;
}
export interface TokenResponse {
  access_token: string;
  token_type: string;
}
export interface LoginResult {
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  data?: TokenResponse;
}

export interface ErrorType {
  error?: {
    code?: string;
    message?: string;
  };
}
