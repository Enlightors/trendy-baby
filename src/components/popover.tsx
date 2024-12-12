import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 0, ...props }, ref) => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center">
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            ref={ref}
            sideOffset={0}
            className={cn(
              " w-screen z-50 rounded-lg bg-[#3F738D]/80 p-4   text-white shadow-md outline-none "
            )}
            {...props}
          ></PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </div>
    </div>
  );
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
