import { WebElement, Key } from "selenium-webdriver";

export async function enterValue(element: WebElement, value: string) {
    await element.sendKeys(value);
}

export async function pressEnterInInput(element: WebElement) {
    await element.sendKeys(Key.ENTER);
}

export async function toggleElementsInList(elements: WebElement[]) {
    for (const element of elements) {
        await element.click();
    }
}
