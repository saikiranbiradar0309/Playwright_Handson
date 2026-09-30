import 'dotenv/config'
import {test, expect} from "@playwright/test";

test('naukri_login', async ({page})=>{
    await page.goto('https://www.naukri.com/');

    await page.waitForTimeout(5000);

    await page.locator("//a[contains(@title,'Jobseeker Login')]").click();

    await page.waitForTimeout(5000);

    await page.locator("//input[contains(@placeholder,'Enter your active Email ID / Username')]")
                    .fill(process.env.NAUKRI_USERNAME);

    await page.locator("//input[contains(@placeholder,'Enter your password')]")
                    .fill(process.env.NAUKRI_PASSWORD);
    
    await page.waitForTimeout(5000);
    
    await page.locator("//button[@type='submit']").click();

    await page.locator("//div[@class='view-profile-wrapper']").click();



})