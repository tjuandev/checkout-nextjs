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
  appliedPromotion: boolean
  vipDiscount: number
  appliedVipDiscount: boolean
  onClearCart: () => void
}
