'use client'

import { Button } from '@/components/atoms/Button/Button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/molecules/Card/Card'
import { useCheckout } from '@/contexts/Checkout/context'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { S } from './styles'
import type { CardImageProps, ProductCardProps } from './types'

const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div className={S.image.container}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={S.image.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className={S.image.noImageContainer}>
          <span className={S.image.noImageText}>No Image</span>
        </div>
      )}
    </div>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCheckout()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <Card className={S.card}>
      <CardImage src={product.image ?? ''} alt={product.name} />

      <CardHeader className={S.header.container}>
        <CardTitle className={S.header.title}>{product.name}</CardTitle>
      </CardHeader>

      <CardContent className={S.content.container}>
        <div className={S.content.gameInfo}>
          {product.rating && (
            <div className={S.content.ratingContainer}>
              <span className={S.content.ratingStar}>★</span>
              <span className={S.content.ratingText}>
                {product.rating.toFixed(1)}
              </span>
            </div>
          )}
          {product.released && (
            <span className={S.content.releaseYear}>
              {new Date(product.released).getFullYear()}
            </span>
          )}
        </div>

        <p className={S.content.description}>
          Experience the latest in gaming with stunning graphics and immersive
          gameplay
        </p>
      </CardContent>

      <CardFooter className={S.footer.container}>
        <div className={S.footer.content}>
          <div className={S.footer.priceContainer}>
            <span className={S.footer.price}>{formatPrice(product.price)}</span>
            <span className={S.footer.downloadText}>Digital Download</span>
          </div>

          <Button
            onClick={handleAddToCart}
            size="sm"
            className={S.footer.addToCheckoutButton}
          >
            <Plus className={S.footer.plusIcon} />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
