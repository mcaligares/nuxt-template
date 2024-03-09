// @vitest-environment nuxt
import { describe, expect, test } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHero from '~/components/AppHero.vue'

describe('test AppHero component', async () => {
  test('AppHero property', async () => {
    const title = 'some title';
    const props = { props: { title } };
    const component = await mountSuspended(AppHero, props);

    expect(component.text()).toEqual(title);
  })
})

