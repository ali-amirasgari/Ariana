import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "@/components/ui/formField";
import { loginSchema } from "@/validations/auth";
import { useState } from "react";
import authService from "@/services/authService";
import { ROUTES } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

type LoginFormValues = z.infer<typeof loginSchema>;

function Login() {
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await authService.login(data);

      if (response.status === 200) {
        setIsError(false);
        localStorage.setItem("ariana-token", response.data.token);
        navigate(ROUTES.PROTECTED.DASHBOARD.path);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="h1">Login</h1>
        <p className="body1">
          Enter your username and password to login to your account.
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Username"
          placeholder="Please enter your username"
          error={errors.username?.message}
          {...register("username")}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Please enter your password"
          error={errors.password?.message}
          {...register("password")}
        />
        {isError && (
          <div className="flex items-center justify-center mb-2">  
            <p className="error">Invalid username or password</p>
          </div>
        )}
        <div className="flex flex-col">
          <Button
            type="submit"
            variant="default"
            className="w-full mt-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in" : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
