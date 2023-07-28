import { describe, before, after, it } from 'mocha';
import { Builder, By } from 'selenium-webdriver';
import { assert } from 'chai';

import config from '../config';
import { enterValue, pressEnterInInput, toggleElementsInList } from './functions';

describe("Todo List Tests", async function () {
    let driver;
    const find_todo_elements = async () => await driver.findElements(By.css('.todo-list .toggle'));

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
        const todoListItems = await find_todo_elements();
        const itemOne = await todoListItems[0].getText();
        const itemTwo = await todoListItems[1].getText();
        assert(() => itemOne.contains(TODO_ITEM_ONE));
        assert(() => itemTwo.contains(TODO_ITEM_TWO));
        assert(() => todoListItems.length === 2);
    });

    it("Can Toggle Items In Todo List", async function () {
        // Arrange
        const todoListItems = await find_todo_elements();

        // Act
        await toggleElementsInList(todoListItems);

        // Assert
        const toggledElements = await driver.findElements(By.css(".todo-list .completed"));
        assert(() => toggledElements.length === 2);
    });
})
