import { Builder, By, until, ThenableWebDriver, WebElementPromise } from 'selenium-webdriver';
import * as webdriver from "selenium-webdriver";
const addContext = require('mochawesome/addContext')
import * as filesystem from "fs"
import 'chromedriver';
import { WaitCondition } from './';
import { Key } from 'selenium-webdriver';
import { WebComponent } from './components';




export class Browser {
  public driver: ThenableWebDriver;
  //public static instance: Browser;


    public constructor(private browserName: string) {
      this.driver = new Builder().forBrowser(browserName).build();
  }

  public async navigate(url: string): Promise<void> {
    await this.driver.navigate().to(url);
  }

  public async wait(condition: WaitCondition): Promise<void> {
    await this.waitAny(condition);
  }

  public async waitAny(conditions: WaitCondition | WaitCondition[]): Promise<void> {
    const all = (!(conditions instanceof Array)) ? [ conditions ] : conditions;

    await this.driver.wait(async () => {
      for (const condition of all) {
        try {
          if (await condition(this) === true) {
            return true;
          }
          continue;
        } catch (ex) {
          continue;
        }
      }
    });
  }

  public findElementByCss(selector: string): WebElementPromise {
    return this.driver.findElement(By.css(selector));
}

public findElementByXpath(selector: string): WebElementPromise {
    return this.driver.findElement(By.xpath(selector));
}

public findElementById(selector: string): WebElementPromise {
  return this.driver.findElement(By.id(selector));
}

public findElementByClassName(selector: string): WebElementPromise {
  return this.driver.findElement(By.className(selector));
  
}

public async getTitle() {
  return await this.driver.getTitle()
}

public async openNewTab(url: string) {
  await this.driver.switchTo().newWindow('tab')
  await this.driver.navigate().to(url)
}

public async switchToSpecificTab(number: any) {
  let wins = await this.driver.getAllWindowHandles();
  await this.driver.switchTo().window(wins[number])
}

public async scroll(upDown: string) {
  await this.driver.executeScript('window.scrollTo('+'0'+','+upDown+')');
}

public async pressEnter() {
  await this.driver.actions().sendKeys(Key.ENTER).perform();
}

public async moveMouse(elem:any, x:any, y:any) {
  const actions = this.driver.actions({bridge: true});
  await actions.move({duration:200,origin:elem, x:x,y:y}).perform();
  //await this.driver.actions().sendKeys(Key.ENTER).perform();
}

   

  public async close(): Promise<void> {
    return await this.driver.quit();
  }

  public pathOfScreenshotFolder(): string {
    let srcIndex = __dirname.indexOf("src") + 3
    let srcPath = __dirname.substring(0, srcIndex)
    let g =  srcPath + "\\" + "screenshots"
    return srcPath + "\\" + "screenshots"
  };

  public async saveScreenshot(filename: string): Promise<void> {
    return await this.driver.takeScreenshot().then((data) => {
      console.log(`Save Screenshot as: ${filename}`)
      filesystem.writeFileSync(filename, data, 'base64');
    });
   };
};



