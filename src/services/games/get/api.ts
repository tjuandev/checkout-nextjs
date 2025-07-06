import type { Game } from '@/types/game'
import { adaptGames } from './adapters'

// NOTE: API Key exposed here just for demo purposes.
const RAWG_API_KEY =
  process.env.RAWG_API_KEY ?? 'a73e2912330c404b8f266835301a4b31'
const RAWG_BASE_URL = 'https://api.rawg.io/api'

const ONE_HOUR_CACHE_TIME = 3600

export async function getGamesList(page = 1, pageSize = 20): Promise<Game[]> {
  const url = `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}&page=${page}&page_size=${pageSize}&ordering=-rating&metacritic=80,100`

  try {
    const response = await fetch(url, {
      next: { revalidate: ONE_HOUR_CACHE_TIME }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.status}`)
    }

    return adaptGames(await response.json())
  } catch (error) {
    throw new Error('Failed to fetch games')
  }
}
