import type { CheckoutItem } from '@/contexts/Checkout/types'

export interface ProductCardProps {
  product: CheckoutItem & {
    rating?: number
    released?: string
  }
  isAlreadyInCheckout: boolean
}

export interface CardImageProps {
  src: string
  alt: string
}
