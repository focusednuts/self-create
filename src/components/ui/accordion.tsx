"use client"

import { ChevronDown } from "lucide-react"
import { Accordion as Primitive } from "radix-ui"
import { cn } from "@/lib/helper"

const Accordion = (props: React.ComponentProps<typeof Primitive.Root>) => (
    <Primitive.Root data-slot="accordion"{...props} />
)

const AccordionItem = ({
    className,
    ...props
}: React.ComponentProps<typeof Primitive.Item>) => (
    <Primitive.Item
        data-slot="accordion-item"
        className={cn(
            "border-b border-sc-border-subtle last:border-b-0",
            className
        )}
        {...props}
    />
)

const AccordionTrigger = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Primitive.Trigger>) => (
    <Primitive.Header className="flex">
        <Primitive.Trigger
            data-slot="accordion-trigger"
            className={cn(
                "flex flex-1 items-center justify-between gap-3",
                "py-4",
                "text-left text-sm font-medium",
                "outline-none",
                "transition-all",
                "hover:text-sc-brand",
                "focus-visible:ring-2",
                "focus-visible:ring-sc-brand/30",
                "focus-visible:rounded-lg",
                "[&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="shrink-0 size-4 text-sc-content-tertiary transition-transform duration-300" />
        </Primitive.Trigger>
    </Primitive.Header>
)

const AccordionContent = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Primitive.Content>) => (
    <Primitive.Content
        data-slot="accordion-content"
        className={cn(
            "overflow-hidden text-sm",
            "data-[state=closed]:animate-accordion-up",
            "data-[state=open]:animate-accordion-down",
            className
        )}
        {...props}
    >
        <div className="pt-0 pb-4 text-sc-content-secondary leading-relaxed">
            {children}
        </div>
    </Primitive.Content>
)

export { Accordion }

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent