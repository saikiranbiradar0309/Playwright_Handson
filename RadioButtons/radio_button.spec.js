import {test, expect} from '@playwright/test'


test('Radio Button', async ({page})=> {

    await page.goto('https://www.qapractice.com/practice-different-ui-elements');

    await page.waitForTimeout(5000);


    await page.locator("//div[@class='form-check']//input[@id='ui-radio-Radio 2']").click();

    await page.waitForTimeout(3000);
})