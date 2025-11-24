"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { LoaderPinwheel } from "lucide-react"
import { cn } from "@/lib/helper"

const spinnerVariants = cva(
    ["animate-spin"],
    {
        variants: {
            size: {
                sm: "size-4",
                md: "size-5",
                lg: "size-6",
                xl: "size-8"
            }
        },
        defaultVariants: {
            size: "md"
        }
    }
)

const Spinner = ({
    className,
    size,
    ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) => (
    <LoaderPinwheel
        data-slot="spinner"
        data-size={size}
        aria-label="Loading"
        className={cn(
            spinnerVariants({
                size
            }),
            className
        )}
        {...props}
    />
)

export { Spinner }