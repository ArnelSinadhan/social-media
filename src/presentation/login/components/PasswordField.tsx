import { PasswordFieldProps } from "../../../app/login/types/types";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function PasswordField({
  password,
  passwordError,
  onChange,
}: PasswordFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={onChange}
        placeholder="Enter your password"
        autoComplete="current-password"
        className={
          passwordError ? "border-red-500 focus-visible:ring-red-500" : ""
        }
      />
      {passwordError && (
        <p className="text-sm text-red-600">
          {typeof passwordError === "string"
            ? passwordError
            : "Invalid password"}
        </p>
      )}
    </div>
  );
}
