import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full rounded-3xl border border-pink-400/60 px-4 py-1 placeholder-slate-400 transition",
        "focus:outline-none focus:ring-2 placeholder:opacity-50 placeholder:text-sm focus:ring-pink-400/60 focus:shadow-pink-400/80",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

