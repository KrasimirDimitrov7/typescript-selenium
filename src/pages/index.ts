import { Base } from '../pages/base_page';
import { Browser } from '../lib/browser';
import { HomePage } from '../pages/home_page';
import { TemporaryMail } from './10_minute_mail';
import { Account } from './account';


export {
    Base, 
    HomePage,
    TemporaryMail,
    Account
};


export class AllPages {
    public base: Base;
    public home: HomePage;
    public temporarymail: TemporaryMail;
    public account: Account;


    constructor(public browser: Browser){
        this.base = new Base(browser)
        this.home = new HomePage(browser)
        this.temporarymail = new TemporaryMail(browser);
        this.account = new Account(browser);
    }
    public async close(): Promise<void> {
        await this.browser.close();
    } 
}