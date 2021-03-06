"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.Account = void 0;
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var page_1 = require("../lib/page");
var lib_3 = require("../lib");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(browser) {
        var _this = _super.call(this, browser) || this;
        _this.fake = new lib_3.Faker;
        _this.setUrl("https://staging.talentjam.com/");
        return _this;
    }
    Account.prototype.loadCondition = function () {
        var _this = this;
        return lib_2.elementIsVisible(function () { return _this.openRegField; });
    };
    Account.prototype.fillInRegistration = function (text) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.switchToSpecificTab(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.openRegField.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.mailFieldRegistration.typeText(text)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.passFieldRegistration.typeText('123456')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.registrationBtn.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.LogIn = function (text) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.wait(lib_2.elementIsVisible(function () { return _this.mailFieldLogIn; }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mailFieldLogIn.typeText(text)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passFieldLogIn.typeText('123456')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.logInBtn.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.browser.driver.sleep(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.browser.scroll('1000')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.activeAccountBtn.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.nextBtn.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.nextBtn2.click()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.fillInProfilInfo = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.scroll('1000')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.firstNameField.typeText(this.fake.firstName())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.lastNameField.typeText(this.fake.lastName())];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.fillIn(this.phoneContainer, 'BG')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.phoneNumber.typeText('0888888888')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.fillIn(this.countryContainer, this.fake.country())];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.professionField.typeText('manager')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.fillIn(this.timezoneContainer, '(UTC+02:00) Europe/Sofia')];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.checkmark.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.saveBtn.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.buttonNext.click()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.fillInBio = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.scroll('400')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fillIn(this.languagesField, 'Bulgarian')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.fillIn2(this.emergencyPhoneContainer, 'BG')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.emergencyPhoneField.typeText('0888888888')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.shortInfoField.typeText('Ordo conditus est tempore tertiae expeditionis sacrae anno 1190. Primum ordo tertia cruciata illis adiuvabat qui in terram sacram migrabant. Deinde ordo militaris factus est ut Imperio Romano Sacro in terra sacra adiuvaret. Tum ordo emigrationem Germanorum ex Germania orientem versus effecit. Anno 1410 milites Polonici et Lituanici deigenetricis hymnum vulgo Bogurodzica appellatum cantantes cruciferos Teutonicos ad silvam viridem ut ipsi dicunt vel ad abium montem ut Germani dicunt vicerunt. Ordo a Napoleone prohibitus est anno 1809. In Austria autem supervixit. Usque ab anno 1929 est ordo clericorum et inter Canonicos Regulares numeratur.')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.genderDrobDown.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.birthdayField.typeText('02/04/1995')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.userAddressField.typeText(this.fake.address())];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.countryDrobDown.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.saveBioPage.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.nextBioPage.click()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.fillInPaymentMethod = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PaymentBtn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.browser.scroll('400')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cardName.typeText('visa')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.browser.driver.switchTo().frame(this.iframe)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cardNumber.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cardNumber.typeText('4242424242424242424242424242')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.browser.driver.switchTo().defaultContent()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.savePaymentBtn.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.browser.driver.sleep(2000)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.fillIn = function (element, text) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.searchField.typeText(text)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.browser.pressEnter()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.fillIn2 = function (element, text) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.searchDropDownFied.typeText(text)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.browser.pressEnter()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        lib_1.findBy("register-btn", "id")
    ], Account.prototype, "openRegField");
    __decorate([
        lib_1.findBy("register-email", "id")
    ], Account.prototype, "mailFieldRegistration");
    __decorate([
        lib_1.findBy("register-password", "id")
    ], Account.prototype, "passFieldRegistration");
    __decorate([
        lib_1.findBy("//*[@id='formRegister']/input[3]", "xpath")
    ], Account.prototype, "registrationBtn");
    __decorate([
        lib_1.findBy("email", "id")
    ], Account.prototype, "mailFieldLogIn");
    __decorate([
        lib_1.findBy("password", "id")
    ], Account.prototype, "passFieldLogIn");
    __decorate([
        lib_1.findBy("//*[@id='formLogin']/input[3]", "xpath")
    ], Account.prototype, "logInBtn");
    __decorate([
        lib_1.findBy("//*[@id='tenmin']/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/table/tbody/tr[1]/td/table/tbody/tr[3]/td/a", "xpath")
    ], Account.prototype, "activeAccountBtn");
    __decorate([
        lib_1.findBy("next-btn", "class")
    ], Account.prototype, "nextBtn");
    __decorate([
        lib_1.findBy("/html/body/div[1]/div[6]/div/div[2]/div/div/div[2]/div[4]/div[2]/div", "xpath")
    ], Account.prototype, "nextBtn2");
    __decorate([
        lib_1.findBy("firstName", "id")
    ], Account.prototype, "firstNameField");
    __decorate([
        lib_1.findBy("lastName", "id")
    ], Account.prototype, "lastNameField");
    __decorate([
        lib_1.findBy("select2-prefix-phone-container", "id")
    ], Account.prototype, "phoneContainer");
    __decorate([
        lib_1.findBy("select2-search__field", "class")
    ], Account.prototype, "searchField");
    __decorate([
        lib_1.findBy("phone", "id")
    ], Account.prototype, "phoneNumber");
    __decorate([
        lib_1.findBy("select2-country-container", "id")
    ], Account.prototype, "countryContainer");
    __decorate([
        lib_1.findBy("profession", "id")
    ], Account.prototype, "professionField");
    __decorate([
        lib_1.findBy("select2-timezone-container", "id")
    ], Account.prototype, "timezoneContainer");
    __decorate([
        lib_1.findBy("accept_geolocation", "id")
    ], Account.prototype, "checkmark");
    __decorate([
        lib_1.findBy("/html/body/div[1]/div[6]/div/form/div/div/div[7]/div/input", "xpath")
    ], Account.prototype, "saveBtn");
    __decorate([
        lib_1.findBy("submit-button next-listing-btn", "class")
    ], Account.prototype, "buttonNext");
    __decorate([
        lib_1.findBy("select2-selection select2-selection--multiple", "class")
    ], Account.prototype, "languagesField");
    __decorate([
        lib_1.findBy("select2-prefix-phone-second-container", "id")
    ], Account.prototype, "emergencyPhoneContainer");
    __decorate([
        lib_1.findBy("phone-second", "id")
    ], Account.prototype, "emergencyPhoneField");
    __decorate([
        lib_1.findBy("short-info", "id")
    ], Account.prototype, "shortInfoField");
    __decorate([
        lib_1.findBy("select2-user-gender-container", "id")
    ], Account.prototype, "genderField");
    __decorate([
        lib_1.findBy("//*[@id='user-gender']/option[2]", "xpath")
    ], Account.prototype, "genderDrobDown");
    __decorate([
        lib_1.findBy("birthday", "id")
    ], Account.prototype, "birthdayField");
    __decorate([
        lib_1.findBy("user-address", "id")
    ], Account.prototype, "userAddressField");
    __decorate([
        lib_1.findBy("//*[@id='user-country']/option[16]", "xpath")
    ], Account.prototype, "countryDrobDown");
    __decorate([
        lib_1.findBy("/html/body/span/span/span[1]/input", "xpath")
    ], Account.prototype, "searchDropDownFied");
    __decorate([
        lib_1.findBy("/html/body/div[1]/div[6]/div/form/div/div/div[5]/div/input", "xpath")
    ], Account.prototype, "saveBioPage");
    __decorate([
        lib_1.findBy("/html/body/div[1]/div[6]/div/form/div/div/div[6]/a[2]", "xpath")
    ], Account.prototype, "nextBioPage");
    __decorate([
        lib_1.findBy("changePaymentMethodTwo", "id")
    ], Account.prototype, "PaymentBtn");
    __decorate([
        lib_1.findBy("card-holder-name", "id")
    ], Account.prototype, "cardName");
    __decorate([
        lib_1.findBy("//*[@id='root']/form/div/div[2]/span[1]/span[2]/div/div[2]/span/input", "xpath")
    ], Account.prototype, "cardNumber");
    __decorate([
        lib_1.findBy("cardnumber", "class")
    ], Account.prototype, "postCodeCard");
    __decorate([
        lib_1.findBy("//*[@id='card-button']", "xpath")
    ], Account.prototype, "savePaymentBtn");
    __decorate([
        lib_1.findBy("/html/body/div[1]/div[1]", "xpath")
    ], Account.prototype, "mesageAddedSuccessfully");
    __decorate([
        lib_1.findBy("//*[@id='card-element']/div/iframe", "xpath")
    ], Account.prototype, "iframe");
    return Account;
}(page_1.Page));
exports.Account = Account;
exports["default"] = Account;
