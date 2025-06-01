import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "../../app/login/hooks/useLogin";
import EmailField from "./components/EmailField";
import LoadingSpinner from "./components/LoadingSpinner";
import PasswordField from "./components/PasswordField";

export default function LoginPage() {
  const {
    email,
    emailError,
    setEmailField,
    password,
    passwordError,
    setPasswordField,
    onSubmit,
    loading,
    apiError,
  } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex w-full max-w-7xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/login-image.png"
            alt="Login illustration"
            width={600}
            height={800}
            className="object-cover h-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 relative">
          <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>

          <Card className="border-none shadow-none">
            <CardContent className="space-y-4 relative">
              {/* API Error Message */}
              {apiError && (
                <div className="mb-4 text-red-600 font-medium text-center">
                  {apiError}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <EmailField
                  email={email}
                  emailError={emailError}
                  onChange={setEmailField}
                />
                <PasswordField
                  password={password}
                  passwordError={passwordError}
                  onChange={setPasswordField}
                />
                <div className="flex justify-end">
                  <Button variant="ghost">Forgot Password?</Button>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  disabled={loading}
                >
                  Login
                </Button>

                <div className="flex items-center my-4">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-2 text-gray-500 text-sm">or</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>

                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 justify-center"
                  disabled={loading}
                >
                  <FcGoogle size={20} />
                  Continue with Google
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 justify-center text-blue-700"
                  disabled={loading}
                >
                  <FaFacebook size={20} />
                  Continue with Facebook
                </Button>
              </form>

              {/* Loading Overlay */}
              {loading && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-2xl">
                  <LoadingSpinner />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
