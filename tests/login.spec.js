import{test,expect} from '@playwright/test'
test('Validate Dashboard Test',async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator(".oxd-input.oxd-input--active[name='username']").fill("admin")
    await page.locator(".oxd-input.oxd-input--active[name='password']").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    expect(await page.title()).toContain('OrangeHRM')
})