import type { CheckoutItem } from '@/contexts/Checkout/types'

export interface ProductCardProps {
  product: Omit<CheckoutItem, 'quantity'> & {
    rating?: number
    released?: string
  }
}

export interface CardImageProps {
  src: string
  alt: string
}
