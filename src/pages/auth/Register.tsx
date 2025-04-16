import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/formField";
import { registerSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PlusIcon from "@/assets/images/plus.svg";
import UserIcon from "@/assets/images/user.png";
import { useState, useRef } from "react";

type RegisterFormValues = z.infer<typeof registerSchema>;

function Register() {
  const [avatarPreview, setAvatarPreview] = useState<string>(UserIcon);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue("avatar", file);

      // Create a preview of the uploaded image
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="h1">Sign Up</h1>
        <p className="body1">Enter your information to create an account.</p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`flex justify-between items-center border border-[var(--border-color)] rounded-md py-[10px] px-[12px] ${
            errors.avatar && "border-[var(--warning-color)]"
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={avatarPreview}
              alt="user"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleAvatarUpload}
            />
            <Button
              type="button"
              variant="secondary"
              size="default"
              onClick={handleUploadClick}
            >
              Upload
              <img src={PlusIcon} alt="plus" className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
        <FormField
          label="First name"
          type="text"
          placeholder="Please enter your first name"
          error={errors.first_name?.message}
          {...register("first_name")}
        />
        <FormField
          label="Last name"
          type="text"
          placeholder="Please enter your last name"
          error={errors.last_name?.message}
          {...register("last_name")}
        />
        <FormField
          label="Username"
          type="text"
          placeholder="Please enter username"
          error={errors.userName?.message}
          {...register("userName")}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Please enter password"
          error={errors.password?.message}
          {...register("password")}
        />
        <FormField
          label="Confirm Password"
          type="password"
          placeholder="Please re-enter your password"
          error={errors.confirm_password?.message}
          {...register("confirm_password")}
        />
        <Button type="submit" className="w-full mt-1" disabled={isSubmitting}>
          {isSubmitting ? "Registering" : "Register"}
        </Button>
      </form>
    </div>
  );
}

export default Register;
