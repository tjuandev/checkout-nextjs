'use client'

import { Button } from '@/components/atoms/Button/Button'
import { Switch } from '@/components/atoms/Switch/Switch'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/molecules/Drawer/Drawer'
import { useCheckout } from '@/contexts/Checkout/context'
import { Gift, ShoppingCart, Trash2, X } from 'lucide-react'
import { S } from './styles'
import type {
  CheckoutDrawerBodyProps,
  CheckoutDrawerFooterProps,
  CheckoutDrawerHeaderProps
} from './types'

interface PromotionDisplayProps {
  appliedPromotion: boolean
  appliedVipDiscount: boolean
  saving: number
  originalPrice: number
  totalPrice: number
  vipDiscount: number
}

function CheckoutDrawerHeader({ totalItems }: CheckoutDrawerHeaderProps) {
  const { isVipClient, setIsVipClient } = useCheckout()

  return (
    <DrawerHeader className={S.header.container}>
      <div className={S.header.content}>
        <DrawerTitle className={S.header.title}>
          <ShoppingCart className={S.header.titleIcon} />
          Shopping Cart ({totalItems})
        </DrawerTitle>
        <div className={S.header.controls}>
          <div className={S.header.vipMode}>
            <span className={S.header.vipLabel}>VIP Mode</span>
            <Switch
              checked={isVipClient}
              onCheckedChange={setIsVipClient}
              className={S.header.vipSwitch}
              data-testid="vip-switch"
            />
          </div>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className={S.header.closeButton}
            >
              <X className={S.header.closeIcon} />
              <span className="sr-only">Close cart</span>
            </Button>
          </DrawerClose>
        </div>
      </div>
    </DrawerHeader>
  )
}

function CheckoutDrawerBody({ items, onRemoveItem }: CheckoutDrawerBodyProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className={S.content.container}>
      {items.length === 0 ? (
        <div
          className={S.content.emptyState.container}
          data-testid="empty-cart"
        >
          <ShoppingCart className={S.content.emptyState.icon} />
          <h3 className={S.content.emptyState.title}>Your cart is empty</h3>
          <p className={S.content.emptyState.description}>
            Add some games to get started!
          </p>
        </div>
      ) : (
        <div className={S.content.itemsList}>
          {items.map(item => (
            <div
              key={item.id}
              className={S.content.item.container}
              data-testid={`cart-item-${item.id}`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={S.content.item.image}
                />
              )}

              <div className={S.content.item.content}>
                <h4 className={S.content.item.title}>{item.name}</h4>
                <p
                  className={S.content.item.price}
                  data-testid={`cart-item-price-${item.id}`}
                >
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className={S.content.item.controls}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={S.content.item.removeButton}
                  onClick={() => onRemoveItem(item.id)}
                  data-testid={`remove-item-${item.id}`}
                >
                  <Trash2 className={S.content.item.trashIcon} />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PromotionDisplay({
  appliedPromotion,
  appliedVipDiscount,
  saving,
  originalPrice,
  totalPrice,
  vipDiscount
}: PromotionDisplayProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  if (!appliedPromotion && !appliedVipDiscount) return null

  return (
    <div
      className={S.footer.promotion.container(appliedVipDiscount)}
      data-testid="promotion-display"
    >
      <div className={S.footer.promotion.badge}>
        <Gift className={S.footer.promotion.icon} />
        <span>
          {appliedVipDiscount
            ? 'VIP Discount - 15% Off!'
            : 'Get 3 for the Price of 2!'}
        </span>
      </div>
      <div className={S.footer.promotion.details}>
        <span className={S.footer.promotion.saving}>
          {appliedVipDiscount
            ? `You save ${formatPrice(vipDiscount)} (VIP exclusive!)`
            : `You save ${formatPrice(saving)}!`}
        </span>
        &nbsp;
        {originalPrice !== totalPrice && (
          <span className={S.footer.promotion.originalPrice}>
            Original: {formatPrice(originalPrice)}
          </span>
        )}
      </div>
    </div>
  )
}

function CheckoutDrawerFooter({
  totalPrice,
  originalPrice,
  saving,
  appliedPromotion,
  vipDiscount,
  appliedVipDiscount,
  onClearCart
}: CheckoutDrawerFooterProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <DrawerFooter className={S.footer.container}>
      <div className={S.footer.content}>
        <PromotionDisplay
          appliedPromotion={appliedPromotion}
          appliedVipDiscount={appliedVipDiscount}
          saving={saving}
          originalPrice={originalPrice}
          totalPrice={totalPrice}
          vipDiscount={vipDiscount}
        />

        <div className={S.footer.total.container}>
          <span className={S.footer.total.label}>Total:</span>
          <span className={S.footer.total.value} data-testid="cart-total">
            {formatPrice(totalPrice)}
          </span>
        </div>

        <div className={S.footer.buttons}>
          <Button
            variant="ghost"
            onClick={onClearCart}
            className={S.footer.clearButton}
            data-testid="clear-cart-button"
          >
            Clear Cart
          </Button>
          <Button
            className={S.footer.checkoutButton}
            data-testid="checkout-button-drawer"
          >
            Checkout
          </Button>
        </div>
      </div>
    </DrawerFooter>
  )
}

export function CheckoutDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    promotionDetails
  } = useCheckout()

  return (
    <Drawer open={isOpen} onOpenChange={closeCart} direction="right">
      <DrawerContent className={S.drawer} data-testid="checkout-drawer">
        <CheckoutDrawerHeader totalItems={totalItems} />

        <CheckoutDrawerBody items={items} onRemoveItem={removeItem} />

        {items.length > 0 && (
          <CheckoutDrawerFooter
            totalPrice={totalPrice}
            originalPrice={promotionDetails.originalPrice}
            saving={promotionDetails.saving}
            appliedPromotion={promotionDetails.appliedPromotion}
            vipDiscount={promotionDetails.vipDiscount}
            appliedVipDiscount={promotionDetails.appliedVipDiscount}
            onClearCart={clearCart}
          />
        )}
      </DrawerContent>
    </Drawer>
  )
}
