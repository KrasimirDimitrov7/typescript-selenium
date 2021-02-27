import { WebComponent, findBy } from '../lib';
import {  elementIsVisible } from '../lib';
import {  Browser } from '../lib/browser';
import { Page } from "../lib/page";
import { Faker } from '../lib'
import { Key, WebElement, WebElementPromise, By } from 'selenium-webdriver';
import { elementIsEnabled, elementIsSelected } from 'selenium-webdriver/lib/until';
import { Hook } from 'mocha';



export class Account extends Page{
  constructor(browser: Browser) {
    super(browser);
    this.setUrl("https://staging.talentjam.com/");
  }
  
  fake = new Faker



  @findBy("register-btn", "id")
  public openRegField!: WebComponent;

  @findBy("register-email", "id")
  public mailFieldRegistration!: WebComponent;

  @findBy("register-password", "id")
  public passFieldRegistration!: WebComponent;

  @findBy("//*[@id='formRegister']/input[3]", "xpath")
  public registrationBtn!: WebComponent;

  @findBy("email", "id")
  public mailFieldLogIn!: WebComponent;

  @findBy("password", "id")
  public passFieldLogIn!: WebComponent;

  @findBy("//*[@id='formLogin']/input[3]", "xpath")
  public logInBtn!: WebComponent;

  @findBy("//*[@id='tenmin']/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/table/tbody/tr[1]/td/table/tbody/tr[3]/td/a", "xpath")
  public activeAccountBtn!: WebComponent;

  @findBy("next-btn", "class")
  public nextBtn!: WebComponent;

  @findBy("/html/body/div[1]/div[6]/div/div[2]/div/div/div[2]/div[4]/div[2]/div", "xpath")
  public nextBtn2!: WebComponent;


  //Filling in data in profil info

  @findBy("firstName", "id")
  public firstNameField!: WebComponent;

  @findBy("lastName", "id")
  public lastNameField!: WebComponent;

  @findBy("select2-prefix-phone-container", "id")
  public phoneContainer!: WebComponent;

  @findBy("select2-search__field", "class")
  public searchField!: WebComponent;

  @findBy("phone", "id")
  public phoneNumber!: WebComponent;

  @findBy("select2-country-container", "id")
  public countryContainer!: WebComponent;

  @findBy("profession", "id")
  public professionField!: WebComponent;

  @findBy("select2-timezone-container", "id")
  public timezoneContainer!: WebComponent;

  @findBy("accept_geolocation", "id")
  public checkmark!: WebComponent;

  @findBy("/html/body/div[1]/div[6]/div/form/div/div/div[7]/div/input", "xpath")
  public saveBtn!: WebComponent;

  @findBy("submit-button next-listing-btn", "class")
  public buttonNext!: WebComponent;


  //Filling in data in bio and setting bio

  @findBy("select2-selection select2-selection--multiple", "class")
  public languagesField!: WebComponent;

  @findBy("select2-prefix-phone-second-container", "id")
  public emergencyPhoneContainer!: WebComponent;

  @findBy("phone-second", "id")
  public emergencyPhoneField!: WebComponent;

  @findBy("short-info", "id")
  public shortInfoField!: WebComponent;

  @findBy("select2-user-gender-container", "id")
  public genderField!: WebComponent;

  @findBy("//*[@id='user-gender']/option[2]", "xpath")
  public genderDrobDown!: WebComponent;

  @findBy("birthday", "id")
  public birthdayField!: WebComponent;

  @findBy("user-address", "id")
  public userAddressField!: WebComponent;

  @findBy("//*[@id='user-country']/option[16]", "xpath")
  public countryDrobDown!: WebComponent;

  @findBy("/html/body/span/span/span[1]/input", "xpath")
  public searchDropDownFied!: WebComponent;

  @findBy("/html/body/div[1]/div[6]/div/form/div/div/div[5]/div/input", "xpath")
  public saveBioPage!: WebComponent;

  @findBy("/html/body/div[1]/div[6]/div/form/div/div/div[6]/a[2]", "xpath")
  public nextBioPage!: WebComponent;

  
  //Billing page

  @findBy("changePaymentMethodTwo", "id")
  public PaymentBtn!: WebComponent;

  @findBy("card-holder-name", "id")
  public cardName!: WebComponent;

  @findBy("//*[@id='root']/form/div/div[2]/span[1]/span[2]/div/div[2]/span/input", "xpath")
  public cardNumber!: WebComponent;

  @findBy("cardnumber", "class")
  public postCodeCard!: WebComponent;

  @findBy("//*[@id='card-button']", "xpath")
  public savePaymentBtn!: WebComponent;

  @findBy("/html/body/div[1]/div[1]", "xpath")
  public mesageAddedSuccessfully!: WebComponent;

  @findBy("//*[@id='card-element']/div/iframe", "xpath")
  public iframe!: any;

  


  public loadCondition() {
    return elementIsVisible(() => this.openRegField);
  }

  public async fillInRegistration(text:string): Promise<any> {
    await this.browser.switchToSpecificTab(0);
    await this.openRegField.click();
    await this.mailFieldRegistration.typeText(text);
    await this.passFieldRegistration.typeText('123456');
    await this.registrationBtn.click();
  }

  public async LogIn(text:string): Promise<any> {
    await this.browser.wait(elementIsVisible(() => this.mailFieldLogIn));
    await this.mailFieldLogIn.typeText(text);
    await this.passFieldLogIn.typeText('123456');
    await this.logInBtn.click();
    await this.browser.driver.sleep(2000);
    await this.browser.scroll('1000');
    await this.activeAccountBtn.click();
    await this.nextBtn.click();
    await this.nextBtn2.click();
  }

  public async fillInProfilInfo(): Promise<any> {
     await this.browser.scroll('1000');
    await this.firstNameField.typeText(this.fake.firstName());
    await this.lastNameField.typeText(this.fake.lastName());
    await this.fillIn(this.phoneContainer, 'BG');
    await this.phoneNumber.typeText('0888888888');
    await this.fillIn(this.countryContainer, this.fake.country());
    await this.professionField.typeText('manager');
    await this.fillIn(this.timezoneContainer, '(UTC+02:00) Europe/Sofia');
    await this.checkmark.click();
    await this.saveBtn.click();
    await this.buttonNext.click();
  }

  public async fillInBio(): Promise<any> {
    await this.browser.scroll('400');
    await this.fillIn(this.languagesField, 'Bulgarian');
    await this.fillIn2(this.emergencyPhoneContainer, 'BG');
    await this.emergencyPhoneField.typeText('0888888888');
    await this.shortInfoField.typeText('Ordo conditus est tempore tertiae expeditionis sacrae anno 1190. Primum ordo tertia cruciata illis adiuvabat qui in terram sacram migrabant. Deinde ordo militaris factus est ut Imperio Romano Sacro in terra sacra adiuvaret. Tum ordo emigrationem Germanorum ex Germania orientem versus effecit. Anno 1410 milites Polonici et Lituanici deigenetricis hymnum vulgo Bogurodzica appellatum cantantes cruciferos Teutonicos ad silvam viridem ut ipsi dicunt vel ad abium montem ut Germani dicunt vicerunt. Ordo a Napoleone prohibitus est anno 1809. In Austria autem supervixit. Usque ab anno 1929 est ordo clericorum et inter Canonicos Regulares numeratur.')
    await this.genderDrobDown.click();
    await this.birthdayField.typeText('02/04/1995');
    await this.userAddressField.typeText(this.fake.address());
    await this.countryDrobDown.click();
    await this.saveBioPage.click();
    await this.nextBioPage.click();
  }

  public async fillInPaymentMethod(): Promise<any> {
    await this.PaymentBtn.click();
    await this.browser.scroll('400');
    await this.cardName.typeText('visa');
    await this.browser.driver.switchTo().frame(this.iframe);
    await this.cardNumber.click()
    await this.cardNumber.typeText('4242424242424242424242424242')
    await this.browser.driver.switchTo().defaultContent(); 
    await this.savePaymentBtn.click();
    await this.browser.driver.sleep(2000);
  }

  public async fillIn(element:WebComponent, text:string): Promise<any> {
    await element.click();
    await this.searchField.typeText(text);
    await this.browser.pressEnter();
  }

  public async fillIn2(element:WebComponent, text:string): Promise<any> {
    await element.click();
    await this.searchDropDownFied.typeText(text);
    await this.browser.pressEnter();
  }

}

export default Account