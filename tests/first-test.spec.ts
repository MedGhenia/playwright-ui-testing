import { test } from '@playwright/test'

// test.describe('test suite 1', () => {

// })

test('this is a first test', async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

// test('this is a first test 2', () => {

// })

// test('this is a first test 3', () => {

// })