import type { CheckoutItem } from '@/contexts/Checkout/types'

export interface ProductCardProps {
  product: Omit<CheckoutItem, 'quantity'> & {
    rating?: number
    released?: string
  }
  isAlreadyInCheckout: boolean
}

export interface CardImageProps {
  src: string
  alt: string
}
