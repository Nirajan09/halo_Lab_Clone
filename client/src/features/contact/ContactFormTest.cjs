// contactFormTest.cjs
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:5173/contact');

  await page.fill('input[name="name"]', 'Nirajan Tiwari');
  await page.fill('input[name="email"]', 'nirajantiwar09@gmail.com');
  await page.fill('input[name="phone"]', '9812345678');
  await page.selectOption('select[name="budget"]', '1L - 2L');
  await page.fill('textarea[name="project"]', 'For the comprehensive Q&A content you shared covering Django basics, virtual environments, performance, security, admin customization, folder structure, email, PDF generation, request handling, and Celery, a suitable overall title could be:');

  const filePath = path.resolve(__dirname, 'test.pdf');
  await page.setInputFiles('input[type="file"]', filePath);

  await page.click('button[type="submit"]');

  await page.waitForTimeout(15000);
  await browser.close();
})();
