"use client"

import type { VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { Spinner } from "@/components/ui"
import { cn } from "@/lib/helper"
import { buttonVariants } from "./button.module"

function Button({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    disabled,
    children,
    ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
}) {
    const Component = asChild ? Slot.Root : "button"
    return (
        <Component
            data-slot="button"
            data-variant={variant}
            data-size={size}
            data-loading={loading}
            className={cn(
                buttonVariants({
                    variant,
                    size,
                    className
                })
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Spinner />}
            {children}
        </Component>
    )
}

export { Button }