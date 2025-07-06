import type { Game, GamesApiResponse } from '@/types/game'

function generateRandomPrice(): number {
  const min = 9.99
  const max = 69.99
  return Math.round((Math.random() * (max - min) + min) * 100) / 100
}

export function adaptGames(games: GamesApiResponse): Game[] {
  return games.results.map((game: Game) => ({
    ...game,
    price: generateRandomPrice()
  }))
}
