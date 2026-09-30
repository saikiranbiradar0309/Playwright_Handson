import {test, expect, chromium} from '@playwright/test'

test('Handle Pages/Windows', async ()=> {

    // 1. launch/create the browser
    const browser = await chromium.launch();


    //2. Create a new context inside the created browser
    const context = await browser.newContext();


    //3. Inside context create multiple pages
    const page1 = await context.newPage();

    const page2 = await context.newPage();

    //4. To check how many pages we have in current context or how many we created
    const allPages = context.pages();
    console.log("Number of Pages Created:", allPages.length);

    // We cannot navigate from one page to other page as
    // both the pages act independently even though they belong to same context 


    //5. launch some application in page1
    await page1.goto("https://hashnode.com/");

    // Get title of above page1 
    await expect(page1).toHaveTitle("Hashnode — The Best Blogging Platform for Builders in Tech");

    //6. launch another application in page2
    await page2.goto("https://crontab.guru/");

    // Get title of above page2
    await expect(page2).toHaveTitle("Crontab.guru - The cron schedule expression generator");


    //7. Suppose some applications work like when you visit page1 and click on something it will open another
    // page and you want to handle or perform some actions on that page at that time what to do
    // so here Handling New Pages Concept comes



})



test.only('Handle Multiple Pages/Windows', async ()=> {

    // 1. launch/create the browser
    const browser = await chromium.launch();


    //2. Create a new context inside the created browser
    const context = await browser.newContext();


    //3. Open a orangeHRM login page in page 1
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');


    //4. Click on OrangeHRM Link available below
    await page1.locator("//a[contains(text(),'OrangeHRM, Inc')]").click();

    const newPage = await pagePromise;

    //5. Find title of second page
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

    await page1.waitForTimeout(3000);

    await newPage.waitForTimeout(3000);

    await browser.close();
    

})