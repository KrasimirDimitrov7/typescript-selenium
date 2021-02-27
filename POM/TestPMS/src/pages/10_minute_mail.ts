import { WebComponent, findBy } from '../lib';
import {  elementIsVisible } from '../lib';
import {  Browser } from '../lib/browser';
import { Page } from "../lib/page";



export class TemporaryMail extends Page{
  constructor(browser: Browser) {
    super(browser);
    this.setUrl("https://10minemail.com/");
  }
  



  @findBy("mail", "id")
  public mailText!: any;


  @findBy("//*[@id='tenmin']/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[4]/ul/li[2]/div[1]", "xpath")
  public newMail!: WebComponent;

  @findBy("//*[@id='tenmin']/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/table/tbody/tr[1]/td/table/tbody/tr[3]/td/a", "xpath")
  public activateButton!: WebComponent;

  

  


  public loadCondition() {
    return elementIsVisible(() => this.mailText);
  }

  public async getEmail(): Promise<string> { 
    await this.browser.openNewTab('https://10minemail.com/')
    return await this.mailText.getAttribute('value');
  }

  public async confurmRegistration(): Promise<any> { 
    await this.browser.switchToSpecificTab(1);
    await this.browser.scroll('500');
    await this.browser.wait(elementIsVisible(() => this.newMail));
    await this.newMail.click();
    await this.browser.scroll('500');
    await this.activateButton.click();
  }

}

export default TemporaryMail