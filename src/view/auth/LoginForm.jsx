import { useState } from "react";
import { GalleryVerticalEnd, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { handleLogin, loading } = useAuth();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    const success = await handleLogin(phone, password);
    if (!success) {
      setApiError("Invalid phone or password");
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex py-48 overflow-y-auto items-center justify-center",
        "bg-gradient-to-br from-amber-100 via-pink-100 to-rose-100 p-4"
      )}
    >
      <div className="w-full max-w-sm flex flex-col gap-6">
        {/* Logo */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-amber-500 text-white flex size-6 items-center justify-center rounded-md shadow-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="font-semibold text-gray-800 text-lg">Travel.ly</span>
        </a>

        <div className="flex flex-col gap-6">
          <Card className="shadow-lg gap-2">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">
                Welcome Back
              </CardTitle>
              <CardDescription>
                Login using your phone number & password
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 md:p-4">
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  {/* Phone */}
                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      type="text"
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={10}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm">{errors.phone}</p>
                    )}
                  </Field>

                  {/* Password */}
                  <Field>
                    <div className="flex items-center justify-between mb-1">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <button
                        type="button"
                        onClick={() => navigate("/forgot-password")}
                        className="text-sm text-amber-600 hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-sm">{errors.password}</p>
                    )}
                  </Field>

                  {/* API Error */}
                  {apiError && (
                    <p className="text-red-600 text-sm font-medium text-center">
                      {apiError}
                    </p>
                  )}

                  {/* Submit */}
                  <Field>
                    <Button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading && <Spinner className="mr-2" />}
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </Field>

                  {/* Signup */}
                  <FieldDescription className="text-center">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/signup")}
                      className="text-amber-600 font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </FieldDescription>
                </FieldGroup>
              </form>

              {/* Dummy Credentials */}
              <div className="mt-4 bg-amber-100 border border-amber-300 rounded-md p-3 text-sm text-gray-700">
                <p className="font-semibold mb-1">Test Credentials:</p>
                <p>
                  <strong>Phone:</strong> 7768860976
                </p>
                <p>
                  <strong>Password:</strong> Strelema@2026
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <FieldDescription className="px-6 text-center text-sm text-gray-600">
            By logging in, you agree to our{" "}
            <a href="#" className="underline text-amber-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-amber-600">
              Privacy Policy
            </a>
            .
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}
