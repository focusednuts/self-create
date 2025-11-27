"use client"

import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/helper";
import { inputVariants } from "./input.module";

function Input({
    className,
    type,
    error,
    success,
    state,
    size,
    ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants> & {
    error?: boolean
    success?: boolean
}) {
    const resolvedState = error ? "error" : success ? "success" : state ?? "default"
    return (
        <input
            type={type}
            data-slot="input"
            data-error={error}
            data-success={success}
            className={cn(
                inputVariants({
                    state: resolvedState,
                    size
                }),
                className
            )}
            {...props}
        />
    )
}

export { Input }