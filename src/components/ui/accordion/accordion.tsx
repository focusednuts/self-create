"use client"

import { ChevronDown } from "lucide-react"
import { Accordion as Primitive } from "radix-ui"
import { cn } from "@/lib/helper"
import { accordionStyles as styles } from "./accordion.module"

function Accordion({
    ...props
}: React.ComponentProps<typeof Primitive.Root>) {
    return <Primitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof Primitive.Item>) {
    return (
        <Primitive.Item
            data-slot="accordion-item"
            className={cn(
                styles.item,
                className
            )}
            {...props}
        />
    )
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
    return (
        <Primitive.Header className={cn(styles.trigger.header)}>
            <Primitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    styles.trigger.body,
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown className={cn(styles.trigger.chevron)} />
            </Primitive.Trigger>
        </Primitive.Header>
    )
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Primitive.Content>) {
    return (
        <Primitive.Content
            data-slot="accordion-content"
            className={cn(
                styles.content.wrapper,
                className
            )}
            {...props}
        >
            <div className={cn(styles.content.inset)}>
                {children}
            </div>
        </Primitive.Content>
    )
}

export { Accordion }

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent