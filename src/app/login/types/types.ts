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

export interface LoginResult {
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  data?: any;
}
