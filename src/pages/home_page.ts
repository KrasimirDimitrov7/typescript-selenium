import {  Browser } from '../lib/browser';
import { WebComponent, findBy, pageHasLoaded } from '../lib';
import {  elementIsVisible } from '../lib';
import Page from "./base_page";
import { Faker } from '../lib'
import { Base } from './base_page'



export class HomePage extends Page{
        constructor(browser: Browser) {
          super(browser);
          this.setUrl("http://localhost:4200/");
        }
        
        fake = new Faker
        


        @findBy("email-1", "id")
        public userField!: WebComponent;

        @findBy("pass-1", "id")
        public passField!: WebComponent;

        @findBy("send-btn", "class")
        public LogginButton!: WebComponent;

        @findBy("//*[@id='slick-slide09']/div/img", "xpath")
        public imageLogInPage!: WebComponent;

        @findBy("div.logo", "css")
        public logoLogInPage!: WebComponent;

        @findBy("label[for=email-1]", "css")
        public textUser!: WebComponent;

        @findBy("label[for=pass-1]", "css")
        public textPass!: WebComponent;

        @findBy("top-text", "class")
        public textTop!: WebComponent;

        @findBy("bottom-text", "class")
        public textBottom!: WebComponent;

        @findBy("lside", "class")
        public leftBackgroundColour!: WebComponent;

        @findBy("rside", "class")
        public rightBackgroundColour!: WebComponent;

        @findBy("button#slick-slide-control00", "css")
        public slickButton1!: WebComponent;

        @findBy("//*[@id='slick-slide00']/h2", "xpath")
        public slickButton1Title!: WebComponent;

        @findBy("//*[@id='slick-slide00']/p", "xpath")
        public slickButton1Text!: WebComponent;

        @findBy("button#slick-slide-control01", "css")
        public slickButton2!: WebComponent;

        @findBy("//*[@id='slick-slide01']/h2", "xpath")
        public slickButton2Title!: WebComponent;

        @findBy("//*[@id='slick-slide01']/p", "xpath")
        public slickButton2Text!: WebComponent;

        @findBy("button#slick-slide-control02", "css")
        public slickButton3!: WebComponent;

        @findBy("//*[@id='slick-slide02']/h2", "xpath")
        public slickButton3Title!: WebComponent;

        @findBy("//*[@id='slick-slide02']/p", "xpath")
        public slickButton3Text!: WebComponent;

        @findBy("button#slick-slide-control03", "css")
        public slickButton4!: WebComponent;

        @findBy("//*[@id='slick-slide03']/h2", "xpath")
        public slickButton4Title!: WebComponent;

        @findBy("//*[@id='slick-slide03']/p", "xpath")
        public slickButton4Text!: WebComponent;

        @findBy("button#slick-slide-control04", "css")
        public slickButton5!: WebComponent;

        @findBy("//*[@id='slick-slide04']/h2", "xpath")
        public slickButton5Title!: WebComponent;

        @findBy("//*[@id='slick-slide04']/p", "xpath")
        public slickButton5Text!: WebComponent;

        @findBy("button#slick-slide-control05", "css")
        public slickButton6!: WebComponent;

        @findBy("//*[@id='slick-slide05']/h2", "xpath")
        public slickButton6Title!: WebComponent;

        @findBy("//*[@id='slick-slide05']/p", "xpath")
        public slickButton6Text!: WebComponent;

        @findBy("button#slick-slide-control06", "css")
        public slickButton7!: WebComponent;

        @findBy("//*[@id='slick-slide06']/h2", "xpath")
        public slickButton7Title!: WebComponent;

        @findBy("//*[@id='slick-slide06']/p", "xpath")
        public slickButton7Text!: WebComponent;

        @findBy("button#slick-slide-control07", "css")
        public slickButton8!: WebComponent;

        @findBy("//*[@id='slick-slide07']/h2", "xpath")
        public slickButton8Title!: WebComponent;

        @findBy("//*[@id='slick-slide07']/p", "xpath")
        public slickButton8Text!: WebComponent;

        @findBy("button#slick-slide-control08", "css")
        public slickButton9!: WebComponent;

        @findBy("//*[@id='slick-slide08']/h2", "xpath")
        public slickButton9Title!: WebComponent;

        @findBy("//*[@id='slick-slide08']/p", "xpath")
        public slickButton9Text!: WebComponent;

        @findBy("button#slick-slide-control09", "css")
        public slickButton10!: WebComponent;

        @findBy("//*[@id='slick-slide09']/h2", "xpath")
        public slickButton10Title!: WebComponent;

        @findBy("//*[@id='slick-slide09']/p", "xpath")
        public slickButton10Text!: WebComponent;

        @findBy("button#slick-slide-control010", "css")
        public slickButton11!: WebComponent;

        @findBy("//*[@id='slick-slide010']/h2", "xpath")
        public slickButton11Title!: WebComponent;

        @findBy("//*[@id='slick-slide010']/p", "xpath")
        public slickButton11Text!: WebComponent;

      
        public loadCondition() {
          return elementIsVisible(() => this.userField);
        }

        public async logIn() {
          await this.logInAs('Georgi, Admin', '1234')
          await this.browser.wait(pageHasLoaded(Base));

        }
        public async logInWithCorrectDatа() {
          await this.logInAs('Georgi, Admin', '1234')
          await this.browser.driver.sleep(200);
        }
      
        public async logInWithWrongDatа() {
          await this.logInAs(this.fake.fakeEmail(), this.fake.fakePass());
          await this.browser.driver.sleep(200);
        }

        public async logInAs(email: string, pass: string): Promise<void> {
          await this.userField.typeText(email);
          await this.passField.typeText(pass);
          await this.LogginButton.click();
        }
    }

    export default HomePage
    
    
             
