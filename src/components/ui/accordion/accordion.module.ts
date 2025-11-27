"use client"

const accordionStyles = {
    item: [
        "border-b border-sc-border-subtle last:border-b-0"
    ],
    trigger: {
        header: [
            "flex"
        ],
        body: [
            "flex flex-1 items-center justify-between gap-3",
            "py-4",
            "text-left text-sm font-medium",
            "outline-none",
            "transition-all",
            "hover:text-sc-brand",
            "focus-visible:ring-2",
            "focus-visible:ring-sc-brand/30",
            "focus-visible:rounded-lg",
            "[&[data-state=open]>svg]:rotate-180"
        ],
        chevron: [
            "shrink-0 size-4 text-sc-content-tertiary transition-transform duration-300"
        ]
    },
    content: {
        wrapper: [
            "overflow-hidden text-sm",
            "data-[state=closed]:animate-accordion-up",
            "data-[state=open]:animate-accordion-down"
        ],
        inset: [
            "pt-0 pb-4 text-sc-content-secondary leading-relaxed"
        ]
    }
} as const

export { accordionStyles }