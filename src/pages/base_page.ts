import { WebComponent, findBy } from '../lib';
import {  elementIsVisible } from '../lib';
import {  Browser } from '../lib/browser';
import { Page } from "../lib/page";



export class Base extends Page{
  constructor(browser: Browser) {
    super(browser);
    this.setUrl("http://localhost:4200/pms");
  }
  



  @findBy("/html/body/pms-root/pms-main/section/div/pms-panels/div[19]/pms-generic-app/section/div/div[1]/ul/li[2]/button", "xpath")
  public helpButton!: WebComponent;

  @findBy("/html/body/pms-root/pms-main/section/div/pms-panels/div[19]/pms-generic-app/section/div/div[1]/ul/li[2]/ul/li[1]/button", "xpath")
  public onlineManualButton!: WebComponent;


  public loadCondition() {
    return elementIsVisible(() => this.helpButton);
  }

  public async openHelpMenu(): Promise<void> { 
    return await this.helpButton.click();
  
  }

}

export default Base