import * as React from "react";
import { Input, InputProps } from "./input";
import { cn } from "@/lib/utils";

interface FormFieldProps extends Omit<InputProps, "error"> {
  label: string;
  error?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    const hasError = !!error;

    return (
      <div className="space-y-2">
        <label 
          htmlFor={inputId} 
          className={cn(
            "label", 
            hasError && "error"
          )}
        >
          {label}
        </label>
        <Input id={inputId} error={hasError} ref={ref} {...props} />
        {error && (
          <p className="error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
