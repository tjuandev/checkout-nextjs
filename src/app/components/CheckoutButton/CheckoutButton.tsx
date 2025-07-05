'use client'

import { useCart } from '@/contexts/Checkout/context'
import { cn } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../../../components/atoms/Button/Button'

interface CheckoutButtonProps {
  className?: string
}

export function CheckoutButton({ className }: CheckoutButtonProps) {
  const { openCart, totalItems } = useCart()

  return (
    <Button
      variant="ghost"
      className={cn('relative', className)}
      size="icon"
      onClick={openCart}
      aria-label={`Shopping cart with ${totalItems} items`}
    >
      <ShoppingCart className="size-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 size-5 rounded-full bg-yellow-500 text-xs font-bold text-black flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Button>
  )
}
