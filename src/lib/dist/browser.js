"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Browser = void 0;
var selenium_webdriver_1 = require("selenium-webdriver");
var addContext = require('mochawesome/addContext');
var filesystem = require("fs");
require("chromedriver");
var Browser = /** @class */ (function () {
    //public static instance: Browser;
    function Browser(browserName) {
        this.browserName = browserName;
        this.driver = new selenium_webdriver_1.Builder().forBrowser(browserName).build();
    }
    Browser.prototype.navigate = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.navigate().to(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Browser.prototype.wait = function (condition) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitAny(condition)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Browser.prototype.waitAny = function (conditions) {
        return __awaiter(this, void 0, Promise, function () {
            var all;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        all = (!(conditions instanceof Array)) ? [conditions] : conditions;
                        return [4 /*yield*/, this.driver.wait(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _i, all_1, condition, ex_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, all_1 = all;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < all_1.length)) return [3 /*break*/, 6];
                                            condition = all_1[_i];
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 4, , 5]);
                                            return [4 /*yield*/, condition(this)];
                                        case 3:
                                            if ((_a.sent()) === true) {
                                                return [2 /*return*/, true];
                                            }
                                            return [3 /*break*/, 5];
                                        case 4:
                                            ex_1 = _a.sent();
                                            return [3 /*break*/, 5];
                                        case 5:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Browser.prototype.findElementByCss = function (selector) {
        return this.driver.findElement(selenium_webdriver_1.By.css(selector));
    };
    Browser.prototype.findElementByXpath = function (selector) {
        return this.driver.findElement(selenium_webdriver_1.By.xpath(selector));
    };
    Browser.prototype.findElementById = function (selector) {
        return this.driver.findElement(selenium_webdriver_1.By.id(selector));
    };
    Browser.prototype.findElementByClassName = function (selector) {
        return this.driver.findElement(selenium_webdriver_1.By.className(selector));
    };
    Browser.prototype.getTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.getTitle()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Browser.prototype.close = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.quit()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Browser.prototype.pathOfScreenshotFolder = function () {
        var srcIndex = __dirname.indexOf("src") + 3;
        var srcPath = __dirname.substring(0, srcIndex);
        var g = srcPath + "\\" + "screenshots";
        return srcPath + "\\" + "screenshots";
    };
    ;
    Browser.prototype.saveScreenshot = function (filename) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.takeScreenshot().then(function (data) {
                            console.log("Save Screenshot as: " + filename);
                            filesystem.writeFileSync(filename, data, 'base64');
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return Browser;
}());
exports.Browser = Browser;
;
