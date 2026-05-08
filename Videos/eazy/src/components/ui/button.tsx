import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:from-red-600 hover:to-red-700 transform hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-gray-200 bg-white/50 backdrop-blur-sm text-gray-700 shadow-sm hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
        secondary:
          "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 shadow-sm hover:from-gray-100 hover:to-gray-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
        ghost: "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        link: "text-orange-600 underline-offset-4 hover:underline hover:text-orange-700 transition-colors duration-200",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4 py-2",
        lg: "h-12 rounded-xl px-8 py-3 text-base",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
