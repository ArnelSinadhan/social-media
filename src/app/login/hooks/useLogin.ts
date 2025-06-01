import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginResult } from "../types/types";
import { loginUseCase } from "../useCases";

export function useLogin() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApiError("");
    setEmailError("");
    setPasswordError("");

    setLoading(true);

    const result: LoginResult = await loginUseCase({ email, password });

    setLoading(false);

    if (!result.success) {
      switch (result.errorCode) {
        case "MISSING_FIELDS":
          setEmailError("This field is required");
          setPasswordError("This field is required");
          break;
        case "MISSING_EMAIL":
          setEmailError("This field is required");
          break;
        case "MISSING_PASSWORD":
          setPasswordError("This field is required");
          break;
        case "INVALID_CREDENTIALS":
          setApiError(result.errorMessage ?? "Invalid Email or Password");
          break;
        case "API_ERROR":
          setApiError(result.errorMessage ?? "An error occurred");
          break;
        default:
          setApiError(result.errorMessage ?? "Unknown error");
          break;
      }
      return;
    }

    // Success! Redirect to newsfeed page
    router.push("/home");
  }

  function setEmailField(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function setPasswordField(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  return {
    email,
    emailError,
    setEmailField,
    password,
    passwordError,
    setPassword,
    setPasswordField,
    onSubmit,
    loading,
    apiError,
  };
}
