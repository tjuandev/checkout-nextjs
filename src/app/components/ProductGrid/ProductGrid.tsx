'use client'

import { useCheckout } from '@/contexts/Checkout/context'
import type { Game } from '@/types/game'
import { pageS } from '../../styles'
import { ProductCard } from '../ProductCard/ProductCard'

interface ProductGridProps {
  games: Game[]
}

export function ProductGrid({ games }: ProductGridProps) {
  const { items } = useCheckout()

  return (
    <div className={pageS.grid}>
      {games.map(game => (
        <ProductCard
          key={game.id}
          product={{
            id: game.id.toString(),
            name: game.name,
            price: game.price || 29.99,
            image: game.background_image,
            rating: game.rating,
            released: game.released
          }}
          isAlreadyInCheckout={items.some(
            item => item.id === game.id.toString()
          )}
        />
      ))}
    </div>
  )
}
