import {test,expect} from '@playwright/test'

test('multipleLocators', async ({page})=> {

    await page.goto("https://www.demoblaze.com/");

    await page.click('id=login2');

    // ENter username
    await page.fill("//input[@id='loginusername']","pavanol");

    // Enter password
    await page.fill("//input[@id='loginpassword']","test@123");

    // CLick on login
    await page.click("//button[@onclick='logIn()']");


    // Locate all the devices listed on home page

    await page.waitForSelector("//a[@class='hrefch']"); // wait till all products are displayed
    const listedDevices = await page.$$("//a[@class='hrefch']");

    for(const link of listedDevices)
    {

        const linkText = await link.textContent();

        console.log(linkText);
    }

})