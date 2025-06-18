import { NextResponse } from "next/server";
import { login } from "../../../infrastracture/auth/api";
import { ErrorType } from "../../login/types/types";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const data = await login(email, password);

    const response = NextResponse.json({ success: true });
    response.cookies.set("access_token", data.access_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error: unknown) {
    let errorCode = "LOGIN_FAILED";
    let errorMessage = "Unable to login. Please try again.";

    if (typeof error === "object" && error !== null && "error" in error) {
      const errObj = (error as ErrorType).error;
      if (errObj?.code) {
        errorCode = errObj.code;
      }
      if (errObj?.message) {
        errorMessage = errObj.message;
      }
    } else if (error instanceof TypeError) {
      errorCode = "NETWORK_ERROR";
      errorMessage = "Cannot reach server. Please try again later.";
    }

    return NextResponse.json(
      { success: false, errorCode, errorMessage },
      { status: errorCode === "NETWORK_ERROR" ? 500 : 401 }
    );
  }
}
