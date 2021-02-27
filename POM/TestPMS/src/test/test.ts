import { AllPages, Base } from "../pages/index";
import { Browser } from "../lib/browser";
import 'chromedriver';
import {expect} from 'chai'
import { Faker, pageHasLoaded } from "../lib";
import { elementIsDisabled } from "selenium-webdriver/lib/until";
import { Key } from "selenium-webdriver";
const addContext = require('mochawesome/addContext')




describe('Testing Talent Jam', function () {
  let page: AllPages;
  this.retries(1);

  
  beforeEach(async function () {
    page = new AllPages(new Browser('chrome'));
    await page.account.navigate();
  });


  afterEach(async function () {
   
      if (this.currentTest !== undefined) {
        if (this.currentTest.state !== "passed") {
           var imageFileName = new Date().valueOf() + ".jpeg"
           var imageFilePath = page.browser.pathOfScreenshotFolder() + "\\" + imageFileName;
           var _this = this;
       
           await page.browser.saveScreenshot(imageFilePath);
           await addContext(_this, imageFilePath);
         };
       };

    await page.close();
    });

  it('Make account', async () => {

    var mail = await page.temporarymail.getEmail();
    await page.account.fillInRegistration(mail);
    await page.temporarymail.confurmRegistration();
    await page.account.LogIn(mail);
    await page.account.fillInProfilInfo();
    await page.account.fillInBio();
    await page.account.fillInPaymentMethod();
    var message = await page.account.mesageAddedSuccessfully.getText()
    expect(message).to.equal('The Payment method was added successfully!');   
  });




describe.only('Testing PMS', function () {
  let page: AllPages;
  this.retries(1);

  
  beforeEach(async function () {
    page = new AllPages(new Browser('chrome'));
    await page.home.navigate();
  });


  afterEach(async function () {
   
      if (this.currentTest !== undefined) {
        if (this.currentTest.state !== "passed") {
           var imageFileName = new Date().valueOf() + ".jpeg"
           var imageFilePath = page.browser.pathOfScreenshotFolder() + "\\" + imageFileName;
           var _this = this;
       
           await page.browser.saveScreenshot(imageFilePath);
           await addContext(_this, imageFilePath);
         };
       };

    await page.close();
    });

  it.only('The "PMS - Willkommen" page should load', async () => {
    
    await page.home.logInWithCorrectDatа()
    await page.browser.wait(pageHasLoaded(Base))
    let title = await page.browser.getTitle()
    expect(title).to.equal("PMS - Willkommen");
  });

  it('The "PMS - Willkommen" page should not load', async () => {
    
    await page.home.logInWithWrongDatа()
    let title = await page.browser.getTitle()
    expect(title).to.equal("PMS - Fehler1");
  });

  it('Image should exist on Login page', async () => {

    var imageSrc = await page.home.imageLogInPage.getAttribute('src')
    expect(imageSrc).to.equal('http://localhost:4200/assets/css/images/login-slide-image-1.png');
  });

  it('Logo should exist on Login page', async () => {

    var logo = await page.home.logoLogInPage.isDisplayed()
    expect(logo).to.be.true;
  });

  it('Login button should be with text "LOG IN"', async () => {

    var logInButtonText = await page.home.LogginButton.getText()
    expect(logInButtonText).to.equal('LOG IN');
  });

  it('User field should be with text "User"', async () => {

    var userFieldText = await page.home.userField.getAttribute('placeholder');
    expect(userFieldText).to.equal('User');
  });

  it('Pass field should be with text "Password"', async () => {

    var passFieldText = await page.home.passField.getAttribute('placeholder');
    expect(passFieldText).to.equal('Password');
  });

  it('User field should exist', async () => {

    var userField = await page.home.userField.isDisplayed();
    expect(userField).to.be.true
  });

  it('Password field should exist', async () => {

    var passField = await page.home.passField.isDisplayed();
    expect(passField).to.be.true
  });

  it('Тext "User" over the user field', async () => {

    var textUser = await page.home.textUser.getText();
    expect(textUser).to.equal('User')
  });

  it('Тext "Password" over the pass field', async () => {

    var textPass = await page.home.textPass.getText();
    expect(textPass).to.equal('Password')
  });

  it('Тext at the top of the page', async () => {

    var textTop = await page.home.textTop.getText();
    expect(textTop).to.equal('PMS Login  |  PMS 12.0.0.0 BETA |  PMS-WEB 0.03  |  Build date 30.05.2020 2:50:04')
  });

  it('Тext at the bottom of the page', async () => {

    var textBottom = await page.home.textBottom.getText();
    expect(textBottom).to.equal('Licensed to much-net AG(Development)  |  Test Licence  |  Licenced from 10/03/2020 until 30/04/2021')
  });

  it('Log in button should be blue', async () => {

    var colourLogInButton = await page.home.LogginButton.getCssValue('background-color');
    expect(colourLogInButton).to.equal('rgba(19, 192, 215, 1)')
  });

  it('Left background colour should be green', async () => {

    var colourLeftBackground = await page.home.leftBackgroundColour.getCssValue('background-color');
    expect(colourLeftBackground).to.equal('rgba(4, 122, 95, 1)')
  });

  it('Right background colour should be green', async () => {

    var colourRightBackground = await page.home.rightBackgroundColour.getCssValue('background-color');
    expect(colourRightBackground).to.equal('rgba(255, 255, 255, 1)')
  });

  it('Slick button 1 and the attached text', async () => {

    await page.home.slickButton1.click();
    var slickButton1Title = await page.home.slickButton1Title.getText();
    var slickButton1Text = await page.home.slickButton1Text.getText();
    expect(slickButton1Title).to.equal('Trade Repositories')
    expect(slickButton1Text).to.equal('Use the PMS EMIR REGIS-TR to create reports of derivatives trades as required by EMIR and the PMS EMIR REGIS-TR interface to submit them.')
  });

  
  it('Slick button 2 and the attached text', async () => {

    await page.home.slickButton2.click();
    var slickButton2Title = await page.home.slickButton2Title.getText();
    var slickButton2Text = await page.home.slickButton2Text.getText();
    expect(slickButton2Title).to.equal('Reverse Stress Testing')
    expect(slickButton2Text).to.equal('PMS offers a pragmatic module for reverse stress testing.')
  });

  it('Slick button 3 and the attached text', async () => {

    await page.home.slickButton3.click();
    var slickButton3Title = await page.home.slickButton3Title.getText();
    var slickButton3Text = await page.home.slickButton3Text.getText();
    expect(slickButton3Title).to.equal('Stressed Value-at-Risk')
    expect(slickButton3Text).to.equal('PMS offers a module for Stressed VaR in compliance with the Basel regulations.')
  });

  it('Slick button 4 and the attached text', async () => {

    await page.home.slickButton4.click();
    var slickButton4Title = await page.home.slickButton4Title.getText();
    var slickButton4Text = await page.home.slickButton4Text.getText();
    expect(slickButton4Title).to.equal('Additional Valuation Adjustment')
    expect(slickButton4Text).to.equal('PMS offers all XVA (CVA, DVA, FVA etc.) results on position and on portfolio level.')
  });

  it('Slick button 5 and the attached text', async () => {

    await page.home.slickButton5.click();
    var slickButton5Title = await page.home.slickButton5Title.getText();
    var slickButton5Text = await page.home.slickButton5Text.getText();
    expect(slickButton5Title).to.equal('Database Cleansing')
    expect(slickButton5Text).to.equal('You may use the PMS Database Cleansing module to clean up the PMS database and related database tables in a periodic and audit-proof manner.')
  });

  it('Slick button 6 and the attached text', async () => {

    await page.home.slickButton6.click();
    var slickButton6Title = await page.home.slickButton6Title.getText();
    var slickButton6Text = await page.home.slickButton6Text.getText();
    expect(slickButton6Title).to.equal('Hybrid Hull-White')
    expect(slickButton6Text).to.equal('In addition to Hull White 1-factor and 2-factor models, PMS offers the Hybrid Hull-White model as part of the EOT Tool Box.')
  });

  it('Slick button 7 and the attached text', async () => {

    await page.home.slickButton7.click();
    var slickButton7Title = await page.home.slickButton7Title.getText();
    var slickButton7Text = await page.home.slickButton7Text.getText();
    expect(slickButton7Title).to.equal('Limit Check Results')
    expect(slickButton7Text).to.equal('The results of limit checks can not only be viewed by means of reports, but also via the Graphical User Interface of PMS.')
  });

  it('Slick button 8 and the attached text', async () => {

    await page.home.slickButton8.click();
    var slickButton8Title = await page.home.slickButton8Title.getText();
    var slickButton8Text = await page.home.slickButton8Text.getText();
    expect(slickButton8Title).to.equal('Yield Spread Sensitivity')
    expect(slickButton8Text).to.equal('On top of calculating the yield spread for instruments using the PMS Yield Spread Calculator, PMS can also compute and report the yield spread sensitivity.')
  });

  it('Slick button 9 and the attached text', async () => {

    await page.home.slickButton9.click();
    var slickButton9Title = await page.home.slickButton9Title.getText();
    var slickButton9Text = await page.home.slickButton9Text.getText();
    expect(slickButton9Title).to.equal('Potential Fututre Exposure')
    expect(slickButton9Text).to.equal('PMS can compute profiles such as Potential Future Exposure (PFE), Expected Positive Exposure (EPE), Expected Negative Exposure (ENE), Maximum Positive Exposure (MPE), etc.')
  });

  it('Slick button 10 and the attached text', async () => {

    await page.home.slickButton10.click();
    var slickButton10Title = await page.home.slickButton10Title.getText();
    var slickButton10Text = await page.home.slickButton10Text.getText();
    expect(slickButton10Title).to.equal('FX NDF')
    expect(slickButton10Text).to.equal('PMS offers a specific instrument type for FX Non-Deliverable Forwards.')
  });

  it('Slick button 11 and the attached text', async () => {

    await page.home.slickButton11.click();
    var slickButton11Title = await page.home.slickButton11Title.getText();
    var slickButton11Text = await page.home.slickButton11Text.getText();
    expect(slickButton11Title).to.equal('Multifactor Instrument')
    expect(slickButton11Text).to.equal('PMS offers a Multifactor instrument type. The theoretical pricing of such instruments is based on regression and multiple market or risk factors with a beta coefficient for each factor.')
   });

 });

});
