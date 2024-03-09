// @vitest-environment nuxt
import { describe, expect, test } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils/e2e'

describe('test pages', async () => {
  await setup({
    rootDir: '../../',
    configFile: '../../nuxt.config.ts',
    browser: true,
  })

  test('test index page', async () => {
    const title = 'welcome to the home page';
    const page = await createPage('/')

    const result = page.getByText(title);

    expect(await result.isVisible()).toBe(true)
  })

  test('test feature page', async () => {
    const title = 'welcome to the feature page';
    const page = await createPage('/features')

    const result = page.getByText(title);

    expect(await result.isVisible()).toBe(true)
  })

  test('test contact page', async () => {
    const title = 'welcome to the contact page';
    const page = await createPage('/contact')

    const result = page.getByText(title);

    expect(await result.isVisible()).toBe(true)
  })
})

