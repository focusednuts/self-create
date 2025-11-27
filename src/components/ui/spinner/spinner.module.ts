"use client"

import { cva } from "class-variance-authority"

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

export { spinnerVariants }