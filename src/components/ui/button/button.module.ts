"use client"

import { cva } from "class-variance-authority"

const buttonVariants = cva(
    [
        "inline-flex items-center justify-center gap-2",
        "select-none whitespace-nowrap",
        "rounded-xl",
        "font-medium tracking-tight",
        "outline-none",
        "transition-all duration-300 ease-out",
        "disabled:pointer-events-none disabled:opacity-40",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0"
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-sc-brand text-sc-brand-on-emphasis",
                    "shadow-sm hover:shadow-md",
                    "hover:bg-sc-brand-emphasis",
                    "active:scale-95",
                    "focus-visible:outline-sc-brand-emphasis"
                ],
                secondary: [
                    "bg-sc-surface-secondary text-sc-content-primary",
                    "border border-sc-border-default",
                    "hover:bg-sc-surface-tertiary",
                    "active:scale-95",
                    "focus-visible:outline-sc-border-emphasis"
                ],
                outline: [
                    "bg-transparent text-sc-content-primary",
                    "border-2 border-sc-border-default",
                    "hover:bg-sc-surface-secondary hover:border-sc-border-emphasis",
                    "active:scale-95",
                    "focus-visible:outline-sc-border-emphasis"
                ],
                ghost: [
                    "bg-transparent text-sc-content-primary",
                    "hover:bg-sc-surface-secondary",
                    "active:bg-sc-surface-tertiary",
                    "focus-visible:outline-sc-border-emphasis"
                ],
                danger: [
                    "bg-sc-danger text-white",
                    "shadow-sm hover:shadow-md",
                    "hover:bg-sc-danger-emphasis",
                    "active:scale-95",
                    "focus-visible:outline-sc-danger-emphasis"
                ],
                link: [
                    "bg-transparent text-sc-interactive",
                    "hover:text-sc-interactive-hover",
                    "underline-offset-4 hover:underline",
                    "focus-visible:outline-sc-interactive"
                ]
            },
            size: {
                sm: [
                    "h-8 px-3",
                    "gap-1.5",
                    "rounded-lg",
                    "text-sm",
                    "[&_svg]:size-3.5"
                ],
                md: [
                    "h-10 px-4",
                    "gap-2",
                    "text-sm",
                    "[&_svg]:size-4"
                ],
                lg: [
                    "h-12 px-6",
                    "gap-2.5",
                    "text-base",
                    "[&_svg]:size-5"
                ],
                xl: [
                    "h-14 px-8",
                    "gap-3",
                    "text-lg",
                    "[&_svg]:size-6"
                ],
                "icon-sm": [
                    "size-8 p-0",
                    "rounded-lg",
                    "[&_svg]:size-4"
                ],
                "icon-md": [
                    "size-10 p-0",
                    "[&_svg]:size-5"
                ],
                "icon-lg": [
                    "size-12 p-0",
                    "[&_svg]:size-6"
                ],
                "icon-xl": [
                    "size-14 p-0",
                    "[&_svg]:size-7"
                ]
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }
)

export { buttonVariants }