import { WebElement, Key, Condition } from "selenium-webdriver";

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

export async function assertElementContainsText(element: WebElement, expected: string) {
    const actual = await element.getText();
    if (actual !== expected) {
        throw new Error(`Test failed: Expected element to contain ${expected}, but got ${actual}.`);
    }
}   
