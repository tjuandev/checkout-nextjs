import type { Game, GamesApiResponse } from '@/types/game'
import type { Page } from '@playwright/test'

// Mock data for consistent testing
export const mockGames: Game[] = [
  {
    id: 1,
    name: 'The Legend of Zelda: Breath of the Wild',
    background_image: '',
    rating: 4.8,
    rating_top: 5,
    metacritic: 97,
    released: '2017-03-03',
    price: 59.99
  },
  {
    id: 2,
    name: 'Red Dead Redemption 2',
    background_image: '',
    rating: 4.7,
    rating_top: 5,
    metacritic: 96,
    released: '2018-10-26',
    price: 49.99
  },
  {
    id: 3,
    name: 'God of War',
    background_image: '',
    rating: 4.6,
    rating_top: 5,
    metacritic: 94,
    released: '2018-04-20',
    price: 39.99
  },
  {
    id: 4,
    name: 'The Witcher 3: Wild Hunt',
    background_image: '',
    rating: 4.5,
    rating_top: 5,
    metacritic: 93,
    released: '2015-05-19',
    price: 29.99
  },
  {
    id: 5,
    name: 'Elden Ring',
    background_image: '',
    rating: 4.9,
    rating_top: 5,
    metacritic: 96,
    released: '2022-02-25',
    price: 69.99
  }
]

export const mockGamesApiResponse: GamesApiResponse = {
  count: mockGames.length,
  next: null,
  previous: null,
  results: mockGames
}

export const emptyGamesApiResponse: GamesApiResponse = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

export const errorApiResponse = {
  error: 'Internal Server Error',
  message: 'Something went wrong'
}

// Helper function to setup API mocks
export async function setupGamesApiMock(
  page: Page,
  response = mockGamesApiResponse
) {
  // Mock the API response
  await page.route('**/api/games**', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(response)
    })
  })

  // Also mock the direct RAWG API call as fallback
  await page.route('**/api.rawg.io/api/games**', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(response)
    })
  })
}

// Helper function to setup error mock
export async function setupErrorMock(page: Page, statusCode = 500) {
  await page.route('**/api/games**', async (route: any) => {
    await route.fulfill({
      status: statusCode,
      contentType: 'application/json',
      body: JSON.stringify(errorApiResponse)
    })
  })

  await page.route('**/api.rawg.io/api/games**', async (route: any) => {
    await route.fulfill({
      status: statusCode,
      contentType: 'application/json',
      body: JSON.stringify(errorApiResponse)
    })
  })
}

// Helper function to setup empty response mock
export async function setupEmptyMock(page: Page) {
  await setupGamesApiMock(page, emptyGamesApiResponse)
}
