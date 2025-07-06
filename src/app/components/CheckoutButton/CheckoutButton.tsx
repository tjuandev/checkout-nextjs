'use client'

import { useCheckout } from '@/contexts/Checkout/context'
import { cn } from '@/helpers/cn'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../../../components/atoms/Button/Button'
import { S } from './styles'

interface CheckoutButtonProps {
  className?: string
}

export function CheckoutButton({ className }: CheckoutButtonProps) {
  const { openCart, totalItems } = useCheckout()

  return (
    <Button
      variant="ghost"
      className={cn(S.button, className)}
      size="icon"
      onClick={openCart}
      aria-label={`Shopping cart with ${totalItems} items`}
    >
      <ShoppingCart className={S.icon} />
      {totalItems > 0 && (
        <span className={S.badge}>{totalItems > 99 ? '99+' : totalItems}</span>
      )}
    </Button>
  )
}
