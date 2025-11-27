"use client"

import type { VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/helper"
import { badgeVariants } from "./badge.module"

function Badge({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean
}) {
    const Component = asChild ? Slot.Root : "span"
    return (
        <Component
            data-slot="badge"
            data-variant={variant}
            className={cn(
                badgeVariants({
                    variant
                }),
                className
            )}
            {...props}
        />
    )
}

export { Badge }