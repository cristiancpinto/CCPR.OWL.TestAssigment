const { HomePage } = require("../page-objects/home-page");
const { searchResult } = require("../page-objects/search-result");

describe("CNN search", () => {
  const HomeP = new HomePage();
  const SearchR = new searchResult();

  beforeEach(async () => {
    await HomeP.open();
  });

  it("search for valid news", async () => {
    /*SearchR = */ await HomeP.SearchCNN("NFL");
    expect(await SearchR.SearchError()).toBe(false);
  });

  it("search for invalid news", async () => {
    /*SearchR = */ await HomeP.SearchCNN("NFLFake");
    expect(await SearchR.SearchError()).toBe(true);
  });
});
