import { DetailsHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils";

interface ButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export function Button({ icon, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500 py-2 px-6 rounded-lg text-white font-medium",
        props.className
      )}
    >
      <div className="flex gap-2">
        {icon && icon}
        <span>{props.children}</span>
      </div>
    </button>
  );
}
