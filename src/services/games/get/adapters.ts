import type { Game, GamesApiResponse } from '@/types/game'

const MOCK_PRICES_FOR_FIRST_20_GAMES = [
  59.99, 49.99, 39.99, 29.99, 19.99, 9.99, 69.99, 59.99, 49.99, 39.99, 29.99,
  19.99, 9.99, 69.99, 59.99, 49.99, 39.99, 29.99, 19.99, 9.99
]

export function adaptGames(games: GamesApiResponse): Game[] {
  return games.results.map((game: Game, index: number) => ({
    ...game,
    price: MOCK_PRICES_FOR_FIRST_20_GAMES[index]
  }))
}
