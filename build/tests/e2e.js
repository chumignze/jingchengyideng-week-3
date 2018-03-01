'use strict';

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

(async function example() {
	var driver = await new Builder().forBrowser('firefox').build();
	try {
		await driver.get('http://localhost:3000/index/index');
		await driver.findElement(By.id('thumb'));
		var _animation = driver.findElement(By.id('animation'));
		await driver.wait(_animation.isDisplayed(), 1000);
	} catch (e) {
		console.log(e);
	} finally {
		await driver.quit();
	}
})();