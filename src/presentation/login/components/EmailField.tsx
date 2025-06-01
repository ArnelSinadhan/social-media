import { EmailFieldProps } from "../../../app/login/types/types";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function EmailField({
  email,
  emailError,
  onChange,
}: EmailFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your email"
        className={
          emailError ? "border-red-500 focus-visible:ring-red-500" : ""
        }
      />
      {emailError && (
        <p className="text-sm text-red-600">
          {typeof emailError === "string"
            ? emailError
            : "Invalid email address"}
        </p>
      )}
    </div>
  );
}
