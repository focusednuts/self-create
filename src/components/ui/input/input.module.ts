"use client"

import { cva } from "class-variance-authority"

const inputVariants = cva(
    [
        "flex w-full",
        "py-2.5",
        "border-2 border-sc-border-default",
        "rounded-xl",
        "bg-sc-surface",
        "text-sc-content-primary",
        "font-normal",
        "outline-none",
        "placeholder:text-sc-content-tertiary",
        "selection:bg-sc-brand-subtle selection:text-sc-content-primary",
        "transition-all duration-300 ease-out",
        "hover:border-sc-border-emphasis hover:bg-sc-surface-secondary",
        "focus:bg-sc-canvas",
        "focus:border-sc-brand",
        "focus:ring-4 focus:ring-sc-brand/20",
        "disabled:cursor-not-allowed",
        "disabled:bg-sc-surface-tertiary",
        "disabled:opacity-40",
        "file:mr-4 file:px-3 file:py-1",
        "file:rounded-lg",
        "file:border-0",
        "file:bg-sc-surface-secondary file:hover:bg-sc-surface-tertiary",
        "file:font-medium file:text-sc-content-primary",
        "file:cursor-pointer file:transition-colors"
    ],
    {
        variants: {
            state: {
                default: "",
                error: [
                    "border-sc-danger",
                    "focus:border-sc-danger focus:ring-sc-danger/20"
                ],
                success: [
                    "border-sc-success",
                    "focus:border-sc-success focus:ring-sc-success/20"
                ],
                warning: [
                    "border-sc-warning",
                    "focus:border-sc-warning focus:ring-sc-warning/20"
                ]
            },
            size: {
                sm: [
                    "h-9 px-3",
                    "text-sm",
                    "file:text-sm"
                ],
                md: [
                    "h-11 px-4",
                    "text-sm",
                    "file:text-sm"
                ],
                lg: [
                    "h-12 px-4",
                    "text-base",
                    "file:text-base"
                ]
            }
        },
        defaultVariants: {
            state: "default",
            size: "md"
        }
    }
)

export { inputVariants }