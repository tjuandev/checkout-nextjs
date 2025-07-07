'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'
import { calculatePromotion } from './helpers'
import type { CheckoutContextType, CheckoutItem } from './types'

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
)

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CheckoutItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isVipClient, setIsVipClient] = useState(false)

  const addItem = (item: Omit<CheckoutItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(prevItem => prevItem.id === item.id)

      if (existingItem) {
        return prevItems.map(prevItem =>
          prevItem.id === item.id ? { ...prevItem } : prevItem
        )
      }

      return [...prevItems, { ...item }]
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
    const totalItems = items.length
    const promotionDetails = calculatePromotion(items)

    return {
      items,
      isOpen,
      isVipClient,
      addItem,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      setIsVipClient,
      totalItems,
      totalPrice: promotionDetails.discountedPrice,
      promotionDetails
    }
  }, [items, isOpen, isVipClient])

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
