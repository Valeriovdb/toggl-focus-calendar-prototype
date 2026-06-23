const { chromium } = require("playwright");
const { pathToFileURL } = require("node:url");
const path = require("node:path");

(async () => {
  const root = path.resolve(".");
  const deckUrl = pathToFileURL(path.join(root, "slides", "index.html")).href;
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath,
  });

  const page = await browser.newPage({
    viewport: { width: 1700, height: 1000 },
    deviceScaleFactor: 1,
  });

  await page.goto(deckUrl, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images)
        .filter((image) => !image.complete)
        .map(
          (image) =>
            new Promise((resolve) => {
              image.onload = image.onerror = resolve;
            }),
        ),
    );
  });

  for (let index = 1; index <= 3; index += 1) {
    const slide = page.locator(`#slide-${index}`);
    await slide.screenshot({
      path: path.join(root, "slides", "export", `toggl-focus-loom-slide-${index}.png`),
    });
  }

  await browser.close();
})();
