export interface CheckoutDrawerHeaderProps {
  totalItems: number
}

export interface CheckoutDrawerBodyProps {
  items: any[]
  onRemoveItem: (id: string) => void
}

export interface CheckoutDrawerFooterProps {
  totalPrice: number
  originalPrice: number
  saving: number
  freeItemsCount: number
  appliedPromotion: boolean
  onClearCart: () => void
}
