const find = require('appium-flutter-finder')
const assert = require('assert')

describe('Launch App and search', () => {
    it('Click button and search the product', async () => {
        const getStartedBtn = find.byText('Get Started')
        assert.strictEqual(await driver.getElementText(getStartedBtn), 'Get Started')

        await driver.elementClick(getStartedBtn)
    })
})

