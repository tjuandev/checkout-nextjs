import type { CheckoutItem } from './types'

export const calculatePromotion = (items: CheckoutItem[]) => {
  const totalItems = items.length
  const originalPrice = items.reduce((sum, item) => sum + item.price, 0)

  if (totalItems < 3) {
    return {
      originalPrice,
      discountedPrice: originalPrice,
      saving: 0,
      freeItemsCount: 0,
      appliedPromotion: false
    }
  }

  const allItems: Array<{ price: number; id: string }> = items.map(item => ({
    price: item.price,
    id: item.id
  }))

  allItems.sort((a, b) => a.price - b.price)

  const freeItemsCount = 1

  const saving = allItems?.[0]?.price ?? 0

  const discountedPrice = originalPrice - saving

  return {
    originalPrice,
    discountedPrice,
    saving,
    freeItemsCount,
    appliedPromotion: freeItemsCount > 0
  }
}
