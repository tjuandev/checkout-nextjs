export interface CheckoutItem {
  id: string
  name: string
  price: number
  image?: string
}

export interface PromotionDetails {
  originalPrice: number
  discountedPrice: number
  saving: number
  freeItemsCount: number
  appliedPromotion: boolean
  vipDiscount: number
  appliedVipDiscount: boolean
}

export interface CheckoutState {
  items: CheckoutItem[]
  isOpen: boolean
  isVipClient: boolean
}

export interface CheckoutContextType {
  items: CheckoutItem[]
  isOpen: boolean
  isVipClient: boolean
  addItem: (item: Omit<CheckoutItem, 'quantity'>) => void
  removeItem: (id: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  setIsVipClient: (isVip: boolean) => void
  totalItems: number
  totalPrice: number
  promotionDetails: PromotionDetails
}
