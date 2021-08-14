const puppeteer = require('puppeteer');
app = async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--incognito',
        ]
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36")
    await page.goto('https://popcat.click/');
    i = 0;
    while(true) {
        i++;
        await page.deleteCookie({"name": "bot"})
        await page.click('[id="app"]');
        console.log(`Click : ${i}`);
        if (i % 799 === 0) {
            console.log('Wait 5 Sec.')
            await delay(5000);
        }
    }
}
app();