import { cn } from "@/lib/cn";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ComponentProps } from "react";

type SliderProps = {
  label: string;
  className?: string;
} & Omit<ComponentProps<typeof SliderPrimitive.Root>, "className">;

export default function Slider({ label, className, ...props }: SliderProps) {
  return (
    <SliderPrimitive.Root
      aria-label={label}
      className={cn(
        "relative flex w-full max-w-md touch-none items-center px-4 py-4",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-slider-track">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-slider-thumb" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 cursor-pointer rounded-full bg-slider-thumb transition-colors hover:bg-slider-thumb-hover focus:outline-none focus-visible:ring-3 focus-visible:ring-slider-focus" />
    </SliderPrimitive.Root>
  );
}
