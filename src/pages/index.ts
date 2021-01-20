import { Base } from '../pages/base_page';
import { Browser } from '../lib/browser';
import { HomePage } from '../pages/home_page';


export {
    Base, 
    HomePage
};


export class AllPages {
    public base: Base;
    public home: HomePage;

    constructor(public browser: Browser){
        this.base = new Base(browser)
        this.home = new HomePage(browser);
    }
    public async close(): Promise<void> {
        await this.browser.close();
    } 
}