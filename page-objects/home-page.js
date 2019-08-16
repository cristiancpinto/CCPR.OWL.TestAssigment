const { searchResult } = require("../page-objects/search-result");

class HomePage {
  constructor() {
    this.url = "https://www.cnn.com/";
  }

  async open() {
    await page.goto(this.url);
  }

  async SearchCNN(search) {
    //----------------
    //Debug section
    await jestPuppeteer.debug();
    //----------------

    await page.waitForSelector(
      "button.buttonstyles__ButtonBase-augw5g-0:nth-child(2)",
      {
        visible: true,
        enable: true
      }
    );
    await page.click("button.buttonstyles__ButtonBase-augw5g-0:nth-child(2)");
    await page.type("#header-search-bar", search);
    //await page.type("#header-search-bar", String.fromCharCode(13));
    await page.waitForSelector(
      ".iKQPmQ > form:nth-child(1) > button:nth-child(2)",
      {
        visible: true,
        enable: true
      }
    );
    await page.click(".iKQPmQ > form:nth-child(1) > button:nth-child(2)");
    await page.waitForNavigation();
    await page.waitForSelector(".cnn-search__results-list");
    //return new searchResult();
    //return this.page.$eval('.cnn-badge-icon', ($el) => $el.svg);
  }
}

module.exports = {
  HomePage
};
