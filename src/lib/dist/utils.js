"use strict";
exports.__esModule = true;
exports.findBy = exports.delay = void 0;
require("reflect-metadata");
exports.delay = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.findBy = function (selector, strategy) {
    return function (target, propertyKey) {
        var type = Reflect.getMetadata('design:type', target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (!strategy || strategy === "") {
                }
                else if (strategy === 'xpath') {
                    var promise = this.browser.findElementByXpath(selector);
                    return new type(promise, selector);
                }
                else if (strategy === 'id') {
                    var promise = this.browser.findElementById(selector);
                    return new type(promise, selector);
                }
                else if (strategy === 'class') {
                    var promise = this.browser.findElementByClassName(selector);
                    return new type(promise, selector);
                }
                else if (strategy === 'css') {
                    var promise = this.browser.findElementByCss(selector);
                    return new type(promise, selector);
                }
            }
        });
    };
};
