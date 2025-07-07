'use client'

import { getGamesList } from '@/services/games/get/api'
import type { Game } from '@/types/game'
import { useEffect, useState } from 'react'
import { ProductGrid } from './components/ProductGrid/ProductGrid'
import { pageS } from './styles'

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // NOTE: This is implemented as a Client Component to simplify Playwright testing.
  // In production, using a Server Component (or server-side rendering) would be preferred
  // to improve initial load performance and SEO by rendering game data on the server.
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const gamesData = await getGamesList()
        setGames(gamesData)
        setError(false)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  if (loading) {
    return (
      <div className={pageS.container}>
        <div className={pageS.emptyState}>
          <p className={pageS.emptyStateText}>Loading games...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={pageS.container}>
      {games.length > 0 ? (
        <ProductGrid games={games} />
      ) : (
        <div className={pageS.emptyState}>
          <p className={pageS.emptyStateText}>
            {error
              ? 'Failed to load games. Please try again later.'
              : 'No games available.'}
          </p>
        </div>
      )}
    </div>
  )
}
