const find = require('appium-flutter-finder')
const assert = require('assert')
const flutterDriver = require('appium-flutter-driver')

describe('Launch App and Order a product', () => {
    it('Click button and select the product', async () => {
        const getStartedBtn = find.byText('Get Started')
        const oneProduct = find.byText('Second shirt')
        const sSize = find.byText('S')
        const mSize = find.byText('M')
        const xlSize = find.byText('XL')
        const orderNow = find.byValueKey("Order Now Button")
        
        //await driver.swipeRight(getStartedBtn, 1)
        await driver.execute('flutter:waitFor', getStartedBtn)
        assert.strictEqual(await driver.getElementText(getStartedBtn), 'Get Started')
        await driver.elementClick(getStartedBtn)
        print("The Get Started button is clicked")

        await driver.execute('flutter:waitFor', oneProduct)
        await driver.elementClick(oneProduct)
        print("The product")

        await driver.elementClick(sSize)
        await driver.elementClick(mSize)
        await driver.elementClick(xlSize)
        await driver.execute('flutter:waitFor', orderNow)
        await driver.elementClick(orderNow)

    })
})

