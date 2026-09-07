import{test,expect} from '@playwright/test'

test('First Test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})

test('Validate Dashboard Test',async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator(".oxd-input.oxd-input--active[name='username']").fill("admin")
    await page.locator(".oxd-input.oxd-input--active[name='password']").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    expect(await page.title()).toContain('OrangeHRM')
})