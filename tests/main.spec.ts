import { describe, before, after, it } from 'mocha';
import { Builder, By, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';

import config from '../config';
import { enterValue, pressEnterInInput, toggleElementsInList, assertElementContainsText } from './functions';

describe("Todo List Tests", async function () {
    this.timeout(config.timeout);

    let driver;

    before(async function () {
        driver = await new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(config.options)
            .build();

        await driver.get(config.baseUrl);
    });

    after(async function () {
        await driver.quit();
    });

    it("Can Add Items To Todo List", async function () {
        // Arrange
        const newTodoInputField = await driver.findElement(By.className('new-todo'));
        const TODO_ITEM_ONE = 'buy some cheese';
        const TODO_ITEM_TWO = 'feed the cat';

        // Act
        await enterValue(newTodoInputField, TODO_ITEM_ONE);
        await pressEnterInInput(newTodoInputField);
        await enterValue(newTodoInputField, TODO_ITEM_TWO);
        await pressEnterInInput(newTodoInputField);

        // Assert
        const todoListItems = await driver.findElements(By.css('.todo-list label'));
        const itemOne = await todoListItems[0].getText();
        const itemTwo = await todoListItems[1].getText();
        expect(itemOne).to.contain(TODO_ITEM_ONE);
        expect(itemTwo).to.contain(TODO_ITEM_TWO);
        expect(todoListItems.length).to.eq(2);
    });

    it("Can Toggle Items In Todo List", async function () {
        // Arrange
        const todoListItems = await driver.findElements(By.css('.todo-list .toggle'));

        // Act
        await toggleElementsInList(todoListItems);

        // Assert
        const toggledElements = await driver.findElements(By.css(".todo-list .completed"));
        expect(toggledElements.length).to.eq(2);
    });
})
