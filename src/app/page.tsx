import { getGamesList } from '@/services/games/get/api'
import { ProductCard } from './components/ProductCard/ProductCard'
import { pageS } from './styles'

export default async function HomePage() {
  const games = await getGamesList()

  return (
    <div className={pageS.container}>
      {games.length > 0 ? (
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
            />
          ))}
        </div>
      ) : (
        <div className={pageS.emptyState}>
          <p className={pageS.emptyStateText}>
            Failed to load games. Please try again later.
          </p>
        </div>
      )}
    </div>
  )
}
