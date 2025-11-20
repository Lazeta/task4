import { Loader2Icon } from "lucide-react";
import { cn } from "@/shared/lib/utils/cn";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-14 animate-spin", className)}
        {...props}
      />
    </div>
  );
}

export { Spinner };
