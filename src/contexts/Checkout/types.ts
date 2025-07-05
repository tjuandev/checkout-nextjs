export interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface CartState {
  items: CheckoutItem[]
  isOpen: boolean
}

export interface CartContextType {
  items: CheckoutItem[]
  isOpen: boolean
  addItem: (item: Omit<CheckoutItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  totalItems: number
  totalPrice: number
}
