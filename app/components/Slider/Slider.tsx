import { cn } from "@/lib/cn";
import { Field, Input, Label } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva([
  "mt-3 block w-full appearance-none rounded-lg border-none bg-transparent px-3 py-1.5 text-sm/6 text-white",
  // Track styling (WebKit: Chrome, Safari, Edge)
  "[&::-webkit-slider-runnable-track]:rounded-full",
  "[&::-webkit-slider-runnable-track]:bg-[#55575e]",
  "[&::-webkit-slider-runnable-track]:h-1",
  // Track styling (Firefox)
  "[&::-moz-range-track]:rounded-full",
  "[&::-moz-range-track]:bg-[#55575e]",
  "[&::-moz-range-track]:h-1",
  // Thumb styling (WebKit: Chrome, Safari, Edge)
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:cursor-pointer",
  "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
  "[&::-webkit-slider-thumb]:-mt-2",
  "[&::-webkit-slider-thumb]:bg-[#1d75cd]",
  // Hover on thumb (WebKit)
  "hover:[&::-webkit-slider-thumb]:bg-[#2586e0]",
  // Focus ring on thumb (WebKit)
  "focus:[&::-webkit-slider-thumb]:shadow-[0_0_0_2px_black]",
  // Thumb styling (Firefox)
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:border-none",
  "[&::-moz-range-thumb]:cursor-pointer",
  "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",
  "[&::-moz-range-thumb]:bg-[#1d75cd]",
  // Hover on thumb (Firefox)
  "hover:[&::-moz-range-thumb]:bg-[#2586e0]",
  // Focus ring on thumb (Firefox)
  "focus:[&::-moz-range-thumb]:shadow-[0_0_0_2px_black]",
  // Remove default focus outline
  "focus:outline-none",
]);

type SliderProps = VariantProps<typeof sliderVariants> & {
  className?: string;
};

export default function Slider({ className }: SliderProps) {
  return (
    <Field className="w-full max-w-md px-4">
      <Label className="sr-only">Slider</Label>
      <Input type="range" className={cn(sliderVariants(), className)} />
    </Field>
  );
}
