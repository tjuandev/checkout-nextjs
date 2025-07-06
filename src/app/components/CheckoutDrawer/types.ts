export interface CheckoutDrawerHeaderProps {
  totalItems: number
}

export interface CheckoutDrawerBodyProps {
  items: any[]
  onRemoveItem: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
}

export interface CheckoutDrawerFooterProps {
  totalPrice: number
  onClearCart: () => void
}
