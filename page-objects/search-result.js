class searchResult {
  constructor() {
    this.url = "http://www.cnn.com/";
  }

  async SearchError() {
    console.log("paso antes del try");
    try {
      console.log("paso despues del try");
      await page.waitForxpath(
        /*".cnn-search__no-results.buttonstyles__ButtonBase-augw5g-0:nth-child(2)"*/
        "//div[@class='cnn-search__no-results no-results--returned']",
        {
          visible: true,
          enable: true
        }
      );
      return true;
    } catch (error) {
      return false;
    }
    //return this.page.$eval('.cnn-badge-icon', ($el) => $el.svg);
  }
}

module.exports = {
  searchResult
};
