import "regenerator-runtime/runtime";
import { Builder, By } from "selenium-webdriver";
import { Options as FirefoxOptions } from "selenium-webdriver/firefox";

describe("UI tests", function () {
  const driver = new Builder()
    .forBrowser("firefox")
    //.setFirefoxOptions(new FirefoxOptions().headless())
    .build();

  it("should find the title 'Express Calculator' on website", async function () {
    await driver.get("http://localhost:3000");
    const element = await driver.findElement(By.css("h1#title"));
    const title = await element.getText();
    expect(title).toBe("Express Calculator");
  });

  it("should calculate 7 + 3 and give 10 as result", async function () {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.css("#seven")).click();
    await driver.findElement(By.css("#add")).click();
    await driver.findElement(By.css("#three")).click();
    await driver.findElement(By.css("#calculate")).click();
    const element = await driver.findElement(By.css(".results"));
    const result = await element.getText();
    expect(result).toBe("Result: 10");
  });
});
