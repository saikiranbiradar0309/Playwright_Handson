//const {test, expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'

test('Locators', async ({page})=> {

    // make sure always add await before the function 
    // it will make sure the promise to complete
    await page.goto("https://www.demoblaze.com/");



    // click on login button    - property of element as locator

    //await page.locator('id=login2').click();
    await page.click('id=login2');


    // enter username   - Using CSS Selector 
    // it is something like this
    // <input type="text" class="form-control" id="loginusername">
    // So i took id of username as a css property like #loginusername
    
    //await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername','pavanol');
    //await page.type('#loginusername','pavanol');

    

    // Enter password   - Using CSS Selector 
    await page.fill("input[id='loginpassword']",'test@123');


    // Click on Login
    await page.click("//button[normalize-space()='Log in']");


    // Lets verify the login is succeded as we will capture the logout button from home page
    const logoutLink = await page.locator("//a[@id='logout2']");

    await expect(logoutLink).toBeVisible();


    await page.close();
    

})