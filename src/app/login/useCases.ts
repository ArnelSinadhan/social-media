import { LoginInput, LoginResult } from "./types/types";

export async function loginUseCase(input: LoginInput): Promise<LoginResult> {
  const { email, password } = input;

  if (!email || !password) {
    return {
      success: false,
      errorCode: !email ? "MISSING_EMAIL" : "MISSING_PASSWORD",
      errorMessage: `${!email ? "Email" : "Password"} is required`,
    };
  }

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        errorCode: result.errorCode,
        errorMessage: result.errorMessage,
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      errorCode: "NETWORK_ERROR",
      errorMessage: "Unable to reach the server. Please try again later.",
    };
  }
}
