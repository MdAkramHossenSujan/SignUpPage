import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full rounded-2xl border border-pink-400 px-4 py-2 placeholder-slate-400 transition",
        "focus:outline-none focus:ring-2 placeholder:opacity-80 placeholder:text-sm focus:ring-pink-400/80 focus:shadow-pink-400/80",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

