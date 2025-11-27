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
                    "border-sc-border-default",
                    "bg-sc-surface-secondary",
                    "text-sc-content-primary"
                ],
                primary: [
                    "border-sc-brand",
                    "bg-sc-brand",
                    "text-sc-brand-on-emphasis"
                ],
                success: [
                    "border-sc-success/30",
                    "bg-sc-success/10",
                    "text-sc-success"
                ],
                warning: [
                    "border-sc-warning/30",
                    "bg-sc-warning/10",
                    "text-sc-warning"
                ],
                danger: [
                    "border-sc-danger/30",
                    "bg-sc-danger/10",
                    "text-sc-danger"
                ],
                outline: [
                    "border-sc-border-default",
                    "bg-transparent",
                    "text-sc-content-primary"
                ]
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export { badgeVariants }