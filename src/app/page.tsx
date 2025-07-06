import { getGamesList } from '@/services/games/get/api'
import { ProductGrid } from './components/ProductGrid/ProductGrid'
import { pageS } from './styles'

export default async function HomePage() {
  const games = await getGamesList()

  return (
    <div className={pageS.container}>
      {games.length > 0 ? (
        <ProductGrid games={games} />
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
