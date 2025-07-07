import { expect, test } from '@playwright/test'
import {
  mockGames,
  setupEmptyMock,
  setupErrorMock,
  setupGamesApiMock
} from './__mocks__/gamesApi'

test.describe('Game Store E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await setupGamesApiMock(page)
    await page.goto('/')
  })

  test('should display the game store homepage with products', async ({
    page
  }) => {
    await expect(page.locator('[data-testid="product-card-1"]')).toBeVisible()

    const productCards = page.locator('[data-testid^="product-card-"]')
    await expect(productCards).toHaveCount(mockGames.length)

    for (const game of mockGames) {
      await expect(page.locator(`text=${game.name}`)).toBeVisible()
    }
  })

  test('should add product to cart successfully', async ({ page }) => {
    await page.waitForSelector('[data-testid^="product-card-"]')

    const firstAddButton = page.locator('[data-testid^="add-to-cart-"]').first()

    await expect(page.locator('[data-testid="cart-badge"]')).not.toBeVisible()

    await firstAddButton.click()

    await expect(page.locator('[data-testid="cart-badge"]')).toBeVisible()
    await expect(page.locator('[data-testid="cart-badge"]')).toContainText('1')

    await expect(firstAddButton).toContainText('Already in Cart')
  })

  test('should display added items in checkout drawer', async ({ page }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const firstAddButton = page.locator('[data-testid^="add-to-cart-1"]')
    await firstAddButton.click()

    await page.locator('[data-testid="checkout-button"]').click()

    await expect(page.locator('[data-testid^="cart-item-1"]')).toBeVisible()

    await expect(page.locator('[data-testid="cart-total"]')).toBeVisible()
    await expect(page.locator('[data-testid="cart-total"]')).toContainText(
      '$59.99'
    )
  })

  test('should remove item from cart', async ({ page }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const firstAddButton = page.locator('[data-testid^="add-to-cart-"]').first()
    await firstAddButton.click()

    await page.locator('[data-testid="checkout-button"]').click()

    await page.locator('[data-testid^="remove-item-"]').click()

    await expect(page.locator('[data-testid="empty-cart"]')).toBeVisible()

    await expect(page.locator('[data-testid="cart-badge"]')).not.toBeVisible()
  })

  test('should clear entire cart', async ({ page }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const addButtons = page.locator('[data-testid^="add-to-cart-"]')
    const count = await addButtons.count()

    for (let i = 0; i < Math.min(2, count); i++) {
      await addButtons.nth(i).click()
    }

    await page.locator('[data-testid="checkout-button"]').click()

    await page.locator('[data-testid="clear-cart-button"]').click()

    await expect(page.locator('[data-testid="empty-cart"]')).toBeVisible()

    await expect(page.locator('[data-testid="cart-badge"]')).not.toBeVisible()
  })

  test('should apply 3-for-2 promotion when 3 items are added', async ({
    page
  }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const addButtons = page.locator('[data-testid^="add-to-cart-"]')
    const count = await addButtons.count()

    for (let i = 0; i < Math.min(3, count); i++) {
      await addButtons.nth(i).click()
    }

    await page.locator('[data-testid="checkout-button"]').click()

    await expect(
      page.locator('[data-testid="promotion-display"]')
    ).toBeVisible()
    await expect(
      page.locator('[data-testid="promotion-display"]')
    ).toContainText('Get 3 for the Price of 2!')
  })

  test('should apply VIP discount when VIP mode is enabled', async ({
    page
  }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const firstAddButton = page.locator('[data-testid^="add-to-cart-"]').first()
    await firstAddButton.click()

    await page.locator('[data-testid="checkout-button"]').click()

    await page.locator('[data-testid="vip-switch"]').click()

    await expect(
      page.locator('[data-testid="promotion-display"]')
    ).toBeVisible()
    await expect(
      page.locator('[data-testid="promotion-display"]')
    ).toContainText('VIP Discount - 15% Off!')
  })

  test('should handle multiple add to cart clicks', async ({ page }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')

    const firstAddButton = page.locator('[data-testid^="add-to-cart-"]').first()

    await firstAddButton.click()
    await firstAddButton.click()
    await firstAddButton.click()

    await expect(page.locator('[data-testid="cart-badge"]')).toContainText('1')

    await expect(firstAddButton).toContainText('Already in Cart')
  })

  test('should display correct total price in cart', async ({ page }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const firstAddButton = page.locator('[data-testid^="add-to-cart-"]').first()

    const secondAddButton = page.locator('[data-testid^="add-to-cart-"]').nth(1)

    await firstAddButton.click()
    await secondAddButton.click()

    await page.locator('[data-testid="checkout-button"]').click()

    const cartTotal = await page
      .locator('[data-testid="cart-total"]')
      .textContent()
    expect(cartTotal).toBe('$109.98')
  })

  test('should handle empty state when no products are available', async ({
    page
  }) => {
    await setupEmptyMock(page)

    await page.reload()

    const productCards = page.locator('[data-testid^="product-card-"]')
    const count = await productCards.count()
    expect(count).toBe(0)
  })

  test('should handle API error gracefully', async ({ page }) => {
    await setupErrorMock(page)

    await page.reload()

    await expect(page).toHaveTitle('Game Store')
    await expect(page.locator('h1')).toContainText('Game Store')
  })

  test('should calculate correct total with multiple items', async ({
    page
  }) => {
    await page.waitForSelector('[data-testid^="add-to-cart-"]')
    const addButtons = page.locator('[data-testid^="add-to-cart-"]')

    await addButtons.nth(0).click()
    await addButtons.nth(1).click()

    await page.locator('[data-testid="checkout-button"]').click()

    await expect(page.locator('[data-testid="cart-total"]')).toContainText(
      '$109.98'
    )
  })
})
