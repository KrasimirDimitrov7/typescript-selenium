import 'reflect-metadata';
import { Browser, WebElementPromise } from 'selenium-webdriver';

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const findBy = (selector: string,  strategy?: string ) => {
  return (target: any, propertyKey: string) => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!strategy || strategy === "") {
          } 

          else if (strategy === 'xpath')  {
              const promise = (this as any).browser.findElementByXpath(selector);
              return new type(promise, selector);
          }

          else if (strategy === 'id')  {
            const promise = (this as any).browser.findElementById(selector);
            return new type(promise, selector);
          }

          else if (strategy === 'class')  {
            const promise = (this as any).browser.findElementByClassName(selector);
            return new type(promise, selector);
          }
          else if (strategy === 'css')  {
            const promise = (this as any).browser.findElementByCss(selector);
            return new type(promise, selector);
          }
        },
    });
  };
}



