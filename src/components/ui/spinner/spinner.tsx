"use client"

import type { VariantProps } from "class-variance-authority"
import { LoaderPinwheel } from "lucide-react"
import { cn } from "@/lib/helper"
import { spinnerVariants } from "./spinner.module"

function Spinner({
    className,
    size,
    ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
    return (
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
}

export { Spinner }