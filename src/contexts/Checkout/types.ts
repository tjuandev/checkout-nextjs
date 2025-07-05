export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}

export interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  totalItems: number
  totalPrice: number
}
