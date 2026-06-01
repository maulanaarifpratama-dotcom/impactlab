import { useEffect, useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'

let modalStack: number[] = []
let modalIdCounter = 0

export function Modal({ isOpen, onClose, titleId, children, className = '' }: { isOpen: boolean; onClose: () => void; titleId: string; children: ReactNode; className?: string }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const modalId = ++modalIdCounter
    modalStack.push(modalId)
    previousFocus.current = document.activeElement as HTMLElement
    const dialog = dialogRef.current
    const focusable = dialog?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    focusable?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      const isTopModal = modalStack[modalStack.length - 1] === modalId
      if (!isTopModal) return

      if (event.key === 'Escape') {
        event.stopPropagation()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab' || !dialog) return
      const items = Array.from(dialog.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((item) => !item.hasAttribute('disabled'))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      modalStack = modalStack.filter((id) => id !== modalId)
      if (modalStack.length === 0) document.body.style.overflow = ''
      previousFocus.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-charcoal/70 p-0 backdrop-blur-sm md:items-center md:p-6" onMouseDown={handleBackdropMouseDown}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`max-h-[92svh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-soft md:max-w-3xl md:rounded-3xl ${className}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
