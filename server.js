const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const url = 'https://shipsight.synergymarinegroup.com/#/PerformanceReport?VesselId=640&enginedetailid=1717&engineperformanceid=34803';

    await page.goto(url, { waitUntil: 'load', timeout: 0 }); // Wait for the page to fully load with no timeout

    // Set the viewport height to a very large value
    await page.setViewport({ width: 1200, height: 30000 }); // Adjust the width and height as needed

    // Introduce a delay of 2-3 minutes (adjust the time as needed)
    await page.waitForTimeout(2 * 60 * 1000); // 2 minutes

    // Capture a screenshot as a PNG image
    await page.screenshot({ path: 'output2.png', fullPage: true });
    await page.pdf({ path: 'full_page.pdf', format: 'A4' });

    console.log('Screenshot captured as output.png');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
