import { NextResponse } from "next/server";
import { login } from "../../../infrastracture/auth/api";

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
  } catch (error: any) {
    let errorCode = "LOGIN_FAILED";
    let errorMessage = "Unable to login. Please try again.";

    if (error?.error?.code) {
      errorCode = error.error.code;
      errorMessage = error.error.message || errorMessage;
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
