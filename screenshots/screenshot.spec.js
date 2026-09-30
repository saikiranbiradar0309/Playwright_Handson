import {test, expect} from '@playwright/test'

test('page Screenshot', async ({page})=>{

    await page.goto('https://www.amazon.in/')

    // As soon as i open amazon i want to capture screenshot of that page
    // It will create HomePage.png inside my root project folder
    //await page.screenshot({path:'HomePage.png'})

    // It will create HomePage.png inside Playwright/screenshots/Evidence
    //await page.screenshot({path:'screenshots/Evidence/' + 'HomePage.png'})


    // Lets take a scenario, I ran this code 5 times and 5 times my screenshot
    // will be saved as HomePage.png replacing my older once
    // To overcome this situation we add timestamp at the end or starting of the screenshots
    await page.screenshot({path:'screenshots/Evidence/'+ Date.now() +'HomePage.png'})
})


// If you specily .only then only this test will run
test('Full Page Screenshot', async ({page})=>{

    await page.goto('https://www.amazon.in/')

    // It will wait for 5sec 
    // It works same as Thread.sleep() in selenium
    await page.waitForTimeout(5000);

    // At the end specify fullPage:true to take full page screenshot
    await page.screenshot
    ({path:'screenshots/Evidence/'+ Date.now() +'FullHomePage.png', fullPage:true})
})


test.only('Screenshot of particular element', async ({page})=> {

    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(5000);

    // Here we use page.locator().screenshot
    // add the xpath or any locator path inside locator
    await page.
        locator("(//li[@class='gwm-window-tile']//div[contains(@class,'_single-creative-card_style_wd-backdrop-data__1znxG')])[1]")
        .screenshot({path:'screenshots/Evidence/'+ Date.now() +'Under499.png'})
})
