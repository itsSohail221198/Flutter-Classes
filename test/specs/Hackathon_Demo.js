const find = require('appium-flutter-finder')
const assert = require('assert')
const flutterDriver = require('appium-flutter-driver')
const allureReporter = require('@wdio/allure-reporter')

describe('Launch App and Order a product', () => {
    it('Click button and select the product', async () => {
        const getStartedBtn = find.byText('Get Started')
        const oneProduct = find.byText('Second shirt');
        const sSize = find.byText('S')
        const mSize = find.byText('M')
        const xlSize = find.byText('XL')
        const orderNow = find.byValueKey("Order Now Button")
        allureReporter.addFeature('Shopping');
        
        await driver.execute('flutter:waitFor', getStartedBtn)
        assert.strictEqual(await driver.getElementText(getStartedBtn), 'Get Started')
        await driver.elementClick(getStartedBtn)
                    
        await driver.elementClick(oneProduct)

        await driver.elementClick(sSize)

        await driver.elementClick(mSize)

        await driver.elementClick(xlSize)
    
        await driver.elementClick(orderNow)

    })
})

