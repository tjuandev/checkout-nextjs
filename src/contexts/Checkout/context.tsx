'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'
import type { CheckoutContextType, CheckoutItem } from './types'

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
)

export function CheckoutProvider({ children }: { children: ReactNode }) {
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
      clearCart,
      openCart,
      closeCart,
      totalItems,
      totalPrice
    }
  }, [items, isOpen])

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider')
  }
  return context
}
