'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'
import type { CartContextType, CheckoutItem } from './types'

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CheckoutItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: Omit<CheckoutItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(prevItem => prevItem.id === item.id)

      if (existingItem) {
        return prevItems.map(prevItem =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem
        )
      }

      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const openCart = () => {
    setIsOpen(true)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    return {
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      totalItems,
      totalPrice
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
