import { MessageCircle } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { whatsappUrl } from '../config/business'

type WhatsAppLinkProps = {
  children: ReactNode
  className?: string
  showIcon?: boolean
  ariaLabel?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>

export function WhatsAppLink({
  children,
  className,
  showIcon = true,
  ariaLabel = 'Consultar información de Vocarte por WhatsApp',
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {showIcon && <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />}
      <span>{children}</span>
    </a>
  )
}
