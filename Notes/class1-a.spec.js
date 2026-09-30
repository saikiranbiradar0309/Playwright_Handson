/* 
Req.
	- Open google.com website in chrome browser
	- capture browser title, url
	- refresh page, 
	- navigate back
	- navigate forward

*/

import {test, expect} from '@playwright/test'

test('captureTitile', async ({page})=> {

    await page.goto("https://www.google.com/");

    const pageTitle = await page.title();
    console.log(pageTitle);

    const pageURL = await page.url();
    console.log(pageURL);

    await page.reload();

    await page.goto("https://www.amazon.in/");

    await page.goBack();

    await page.goForward();

    await page.pause();
})


