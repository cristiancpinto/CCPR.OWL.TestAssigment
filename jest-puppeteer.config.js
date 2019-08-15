module.exports = {
  launch: {
    headless: process.env.headless === "false",
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  }
};
