/*
Req.
    - Open Amazon.com website in Chrome browser
    - Wait for 4 seconds
    - Capture the browser title and print it in the console
    - Capture the current URL and print it in the console
    - Refresh the Amazon page
    - Navigate to Facebook.com
    - Wait for 4 seconds
    - Navigate back to Amazon.com
    - Wait for 4 seconds
    - Navigate forward to Facebook.com
    - Wait for 4 seconds
    - Close the browser
*/

import {test, expect, chromium} from '@playwright/test'

test('requirement', async ()=> {

    const browser = await chromium.launch({headless: false});

    const page = page.newPage();

    await page.waitForTimeout(4000);
    
    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(4000);




})