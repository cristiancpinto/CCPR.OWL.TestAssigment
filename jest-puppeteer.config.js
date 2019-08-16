module.exports = {
  launch: {
    headless: process.env.headless === "true",
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  }
};
