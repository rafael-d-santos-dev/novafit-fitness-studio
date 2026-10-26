'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FaqItem } from '@/types'

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set([items[0]?.id]))

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="border-t border-border">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        const buttonId = `faq-button-${item.id}`
        const panelId = `faq-panel-${item.id}`
        return (
          <div key={item.id} className="border-b border-border">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition-colors hover:text-accent"
              >
                {item.question}
                <Plus
                  aria-hidden="true"
                  className={cn(
                    'size-5 shrink-0 text-accent transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
