"use client"

import { cva } from "class-variance-authority"

const badgeVariants = cva(
    [
        "inline-flex items-center justify-center gap-1.5",
        "px-2.5 py-0.5",
        "rounded-full",
        "border-2",
        "bg-transparent",
        "text-xs font-medium",
        "whitespace-nowrap",
        "transition-colors",
        "[&>svg]:shrink-0",
        "[&>svg]:size-3"
    ],
    {
        variants: {
            variant: {
                default: [
                    "border-border-default",
                    "bg-surface-secondary",
                    "text-content-primary"
                ],
                primary: [
                    "border-brand",
                    "bg-brand",
                    "text-brand-on-emphasis"
                ],
                success: [
                    "border-success/30",
                    "bg-success/10",
                    "text-success"
                ],
                warning: [
                    "border-warning/30",
                    "bg-warning/10",
                    "text-warning"
                ],
                danger: [
                    "border-danger/30",
                    "bg-danger/10",
                    "text-danger"
                ],
                outline: [
                    "border-border-default",
                    "bg-transparent",
                    "text-content-primary"
                ]
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export { badgeVariants }