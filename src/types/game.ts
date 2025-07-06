export interface Game {
  id: number
  name: string
  background_image: string
  rating: number
  rating_top: number
  metacritic: number
  released: string
  price?: number
}

export interface GamesApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Game[]
}
