/*
1. page.getByAltText(): to locate an element, usually an Image, by its text alternative

2. page.getByPlaceholder(): To locate an input by placeholder

3. page.getByRole(): To locate by explicit and implicit accessibility attributes

4. page.getByText(): To locate by text content

5. page.getByLabel() to locate a form control by associated label's text.

6. page.getByTitle() to locate an element by its title attribute.

7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).




*/

import {test, expect} from '@playwright/test'

test('Built-inLocators', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // alt attribute is available to which it has images
    // Click on OrangeHRM Logo you can see alt 
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();


    // page.getByPlaceholder(): To locate an input by placeholder
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");


    //page.getByRole(): To locate by explicit and implicit accessibility attributes
    await page.getByRole('button',{type: 'submit'}).click();


    //page.getByText(): To locate by text content
    await page.getByText('Directory').click();


    //page.getByLabel() to locate a form control by associated label's text.
    await page.getByLabel('Employee Full Name')

})