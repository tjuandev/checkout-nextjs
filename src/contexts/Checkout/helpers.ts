import type { CheckoutItem } from './types'

export const calculatePromotion = (
  items: CheckoutItem[],
  isVipClient = false
) => {
  const totalItems = items.length
  const originalPrice = items.reduce((sum, item) => sum + item.price, 0)

  if (isVipClient) {
    const vipDiscount = originalPrice * 0.15
    const discountedPrice = originalPrice - vipDiscount

    return {
      originalPrice,
      discountedPrice,
      saving: vipDiscount,
      appliedPromotion: false,
      vipDiscount,
      appliedVipDiscount: true
    }
  }

  if (totalItems < 3) {
    return {
      originalPrice,
      discountedPrice: originalPrice,
      saving: 0,
      appliedPromotion: false,
      vipDiscount: 0,
      appliedVipDiscount: false
    }
  }

  const allItems: Array<{ price: number; id: string }> = items.map(item => ({
    price: item.price,
    id: item.id
  }))

  allItems.sort((a, b) => a.price - b.price)

  const saving = allItems?.[0]?.price ?? 0

  const discountedPrice = originalPrice - saving

  return {
    originalPrice,
    discountedPrice,
    saving,
    appliedPromotion: saving > 0,
    vipDiscount: 0,
    appliedVipDiscount: false
  }
}
