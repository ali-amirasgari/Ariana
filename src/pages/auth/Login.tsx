import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "@/components/ui/FormField";

// Define validation schema with Zod
const loginSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Type inference from the schema
type LoginFormValues = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulating API call with a timeout
    console.log("Login attempt with:", data);
    // Here you would typically make an API call to your authentication endpoint
    // For example: await loginUser(data);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Username"
          placeholder="Enter your username"
          error={errors.userName?.message}
          {...register("userName")}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Button type="submit" variant="default" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
