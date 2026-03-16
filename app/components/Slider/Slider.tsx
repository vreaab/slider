import { cn } from "@/lib/cn";
import { Input } from "@headlessui/react";

export default function Slider() {
  return (
    <div className="w-full max-w-md px-4">
      <Input
        type="range"
        className={cn(
          "mt-3 block w-full appearance-none rounded-lg border-none bg-transparent px-3 py-1.5 text-sm/6 text-white",
          // Track styling (WebKit: Chrome, Safari, Edge)
          "[&::-webkit-slider-runnable-track]:h-1",
          "[&::-webkit-slider-runnable-track]:rounded-full",
          "[&::-webkit-slider-runnable-track]:bg-[#55575e]",
          // Track styling (Firefox)
          "[&::-moz-range-track]:h-1",
          "[&::-moz-range-track]:rounded-full",
          "[&::-moz-range-track]:bg-[#55575e]",
          // Thumb styling (WebKit: Chrome, Safari, Edge)
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
          "[&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-[#1d75cd]",
          "[&::-webkit-slider-thumb]:cursor-pointer",
          "[&::-webkit-slider-thumb]:-mt-2",
          // Thumb styling (Firefox)
          "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",
          "[&::-moz-range-thumb]:rounded-full",
          "[&::-moz-range-thumb]:border-none",
          "[&::-moz-range-thumb]:bg-[#1d75cd]",
          "[&::-moz-range-thumb]:cursor-pointer",
          // Focus
          "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black",
        )}
      />
    </div>
  );
}
