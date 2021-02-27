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
var index_1 = require("../pages/index");
var browser_1 = require("../lib/browser");
require("chromedriver");
var chai_1 = require("chai");
var lib_1 = require("../lib");
var addContext = require('mochawesome/addContext');
describe('Testing Talent Jam', function () {
    var _this_1 = this;
    var page;
    this.retries(1);
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = new index_1.AllPages(new browser_1.Browser('chrome'));
                        return [4 /*yield*/, page.account.navigate()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageFileName, imageFilePath, _this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentTest !== undefined)) return [3 /*break*/, 4];
                        if (!(this.currentTest.state !== "passed")) return [3 /*break*/, 3];
                        imageFileName = new Date().valueOf() + ".jpeg";
                        imageFilePath = page.browser.pathOfScreenshotFolder() + "\\" + imageFileName;
                        _this = this;
                        return [4 /*yield*/, page.browser.saveScreenshot(imageFilePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, addContext(_this, imageFilePath)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ;
                        _a.label = 4;
                    case 4:
                        ;
                        return [4 /*yield*/, page.close()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Make account', function () { return __awaiter(_this_1, void 0, void 0, function () {
        var mail, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.temporarymail.getEmail()];
                case 1:
                    mail = _a.sent();
                    return [4 /*yield*/, page.account.fillInRegistration(mail)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.temporarymail.confurmRegistration()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.account.LogIn(mail)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, page.account.fillInProfilInfo()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.account.fillInBio()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.account.fillInPaymentMethod()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.account.mesageAddedSuccessfully.getText()];
                case 8:
                    message = _a.sent();
                    chai_1.expect(message).to.equal('The Payment method was added successfully!');
                    return [2 /*return*/];
            }
        });
    }); });
    describe.only('Testing PMS', function () {
        var _this_1 = this;
        var page;
        this.retries(1);
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            page = new index_1.AllPages(new browser_1.Browser('chrome'));
                            return [4 /*yield*/, page.home.navigate()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function () {
                var imageFileName, imageFilePath, _this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.currentTest !== undefined)) return [3 /*break*/, 4];
                            if (!(this.currentTest.state !== "passed")) return [3 /*break*/, 3];
                            imageFileName = new Date().valueOf() + ".jpeg";
                            imageFilePath = page.browser.pathOfScreenshotFolder() + "\\" + imageFileName;
                            _this = this;
                            return [4 /*yield*/, page.browser.saveScreenshot(imageFilePath)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, addContext(_this, imageFilePath)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            ;
                            _a.label = 4;
                        case 4:
                            ;
                            return [4 /*yield*/, page.close()];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        it.only('The "PMS - Willkommen" page should load', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.logInWithCorrectDatа()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.browser.wait(lib_1.pageHasLoaded(index_1.Base))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.browser.getTitle()];
                    case 3:
                        title = _a.sent();
                        chai_1.expect(title).to.equal("PMS - Willkommen");
                        return [2 /*return*/];
                }
            });
        }); });
        it('The "PMS - Willkommen" page should not load', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.logInWithWrongDatа()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.browser.getTitle()];
                    case 2:
                        title = _a.sent();
                        chai_1.expect(title).to.equal("PMS - Fehler1");
                        return [2 /*return*/];
                }
            });
        }); });
        it('Image should exist on Login page', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var imageSrc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.imageLogInPage.getAttribute('src')];
                    case 1:
                        imageSrc = _a.sent();
                        chai_1.expect(imageSrc).to.equal('http://localhost:4200/assets/css/images/login-slide-image-1.png');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Logo should exist on Login page', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var logo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.logoLogInPage.isDisplayed()];
                    case 1:
                        logo = _a.sent();
                        chai_1.expect(logo).to.be["true"];
                        return [2 /*return*/];
                }
            });
        }); });
        it('Login button should be with text "LOG IN"', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var logInButtonText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.LogginButton.getText()];
                    case 1:
                        logInButtonText = _a.sent();
                        chai_1.expect(logInButtonText).to.equal('LOG IN');
                        return [2 /*return*/];
                }
            });
        }); });
        it('User field should be with text "User"', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var userFieldText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.userField.getAttribute('placeholder')];
                    case 1:
                        userFieldText = _a.sent();
                        chai_1.expect(userFieldText).to.equal('User');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Pass field should be with text "Password"', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var passFieldText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.passField.getAttribute('placeholder')];
                    case 1:
                        passFieldText = _a.sent();
                        chai_1.expect(passFieldText).to.equal('Password');
                        return [2 /*return*/];
                }
            });
        }); });
        it('User field should exist', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var userField;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.userField.isDisplayed()];
                    case 1:
                        userField = _a.sent();
                        chai_1.expect(userField).to.be["true"];
                        return [2 /*return*/];
                }
            });
        }); });
        it('Password field should exist', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var passField;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.passField.isDisplayed()];
                    case 1:
                        passField = _a.sent();
                        chai_1.expect(passField).to.be["true"];
                        return [2 /*return*/];
                }
            });
        }); });
        it('Тext "User" over the user field', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var textUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.textUser.getText()];
                    case 1:
                        textUser = _a.sent();
                        chai_1.expect(textUser).to.equal('User');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Тext "Password" over the pass field', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var textPass;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.textPass.getText()];
                    case 1:
                        textPass = _a.sent();
                        chai_1.expect(textPass).to.equal('Password');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Тext at the top of the page', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var textTop;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.textTop.getText()];
                    case 1:
                        textTop = _a.sent();
                        chai_1.expect(textTop).to.equal('PMS Login  |  PMS 12.0.0.0 BETA |  PMS-WEB 0.03  |  Build date 30.05.2020 2:50:04');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Тext at the bottom of the page', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var textBottom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.textBottom.getText()];
                    case 1:
                        textBottom = _a.sent();
                        chai_1.expect(textBottom).to.equal('Licensed to much-net AG(Development)  |  Test Licence  |  Licenced from 10/03/2020 until 30/04/2021');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Log in button should be blue', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var colourLogInButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.LogginButton.getCssValue('background-color')];
                    case 1:
                        colourLogInButton = _a.sent();
                        chai_1.expect(colourLogInButton).to.equal('rgba(19, 192, 215, 1)');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Left background colour should be green', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var colourLeftBackground;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.leftBackgroundColour.getCssValue('background-color')];
                    case 1:
                        colourLeftBackground = _a.sent();
                        chai_1.expect(colourLeftBackground).to.equal('rgba(4, 122, 95, 1)');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Right background colour should be green', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var colourRightBackground;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.rightBackgroundColour.getCssValue('background-color')];
                    case 1:
                        colourRightBackground = _a.sent();
                        chai_1.expect(colourRightBackground).to.equal('rgba(255, 255, 255, 1)');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 1 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton1Title, slickButton1Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton1.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton1Title.getText()];
                    case 2:
                        slickButton1Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton1Text.getText()];
                    case 3:
                        slickButton1Text = _a.sent();
                        chai_1.expect(slickButton1Title).to.equal('Trade Repositories');
                        chai_1.expect(slickButton1Text).to.equal('Use the PMS EMIR REGIS-TR to create reports of derivatives trades as required by EMIR and the PMS EMIR REGIS-TR interface to submit them.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 2 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton2Title, slickButton2Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton2.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton2Title.getText()];
                    case 2:
                        slickButton2Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton2Text.getText()];
                    case 3:
                        slickButton2Text = _a.sent();
                        chai_1.expect(slickButton2Title).to.equal('Reverse Stress Testing');
                        chai_1.expect(slickButton2Text).to.equal('PMS offers a pragmatic module for reverse stress testing.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 3 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton3Title, slickButton3Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton3.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton3Title.getText()];
                    case 2:
                        slickButton3Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton3Text.getText()];
                    case 3:
                        slickButton3Text = _a.sent();
                        chai_1.expect(slickButton3Title).to.equal('Stressed Value-at-Risk');
                        chai_1.expect(slickButton3Text).to.equal('PMS offers a module for Stressed VaR in compliance with the Basel regulations.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 4 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton4Title, slickButton4Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton4.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton4Title.getText()];
                    case 2:
                        slickButton4Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton4Text.getText()];
                    case 3:
                        slickButton4Text = _a.sent();
                        chai_1.expect(slickButton4Title).to.equal('Additional Valuation Adjustment');
                        chai_1.expect(slickButton4Text).to.equal('PMS offers all XVA (CVA, DVA, FVA etc.) results on position and on portfolio level.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 5 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton5Title, slickButton5Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton5.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton5Title.getText()];
                    case 2:
                        slickButton5Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton5Text.getText()];
                    case 3:
                        slickButton5Text = _a.sent();
                        chai_1.expect(slickButton5Title).to.equal('Database Cleansing');
                        chai_1.expect(slickButton5Text).to.equal('You may use the PMS Database Cleansing module to clean up the PMS database and related database tables in a periodic and audit-proof manner.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 6 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton6Title, slickButton6Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton6.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton6Title.getText()];
                    case 2:
                        slickButton6Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton6Text.getText()];
                    case 3:
                        slickButton6Text = _a.sent();
                        chai_1.expect(slickButton6Title).to.equal('Hybrid Hull-White');
                        chai_1.expect(slickButton6Text).to.equal('In addition to Hull White 1-factor and 2-factor models, PMS offers the Hybrid Hull-White model as part of the EOT Tool Box.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 7 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton7Title, slickButton7Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton7.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton7Title.getText()];
                    case 2:
                        slickButton7Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton7Text.getText()];
                    case 3:
                        slickButton7Text = _a.sent();
                        chai_1.expect(slickButton7Title).to.equal('Limit Check Results');
                        chai_1.expect(slickButton7Text).to.equal('The results of limit checks can not only be viewed by means of reports, but also via the Graphical User Interface of PMS.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 8 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton8Title, slickButton8Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton8.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton8Title.getText()];
                    case 2:
                        slickButton8Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton8Text.getText()];
                    case 3:
                        slickButton8Text = _a.sent();
                        chai_1.expect(slickButton8Title).to.equal('Yield Spread Sensitivity');
                        chai_1.expect(slickButton8Text).to.equal('On top of calculating the yield spread for instruments using the PMS Yield Spread Calculator, PMS can also compute and report the yield spread sensitivity.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 9 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton9Title, slickButton9Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton9.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton9Title.getText()];
                    case 2:
                        slickButton9Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton9Text.getText()];
                    case 3:
                        slickButton9Text = _a.sent();
                        chai_1.expect(slickButton9Title).to.equal('Potential Fututre Exposure');
                        chai_1.expect(slickButton9Text).to.equal('PMS can compute profiles such as Potential Future Exposure (PFE), Expected Positive Exposure (EPE), Expected Negative Exposure (ENE), Maximum Positive Exposure (MPE), etc.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 10 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton10Title, slickButton10Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton10.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton10Title.getText()];
                    case 2:
                        slickButton10Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton10Text.getText()];
                    case 3:
                        slickButton10Text = _a.sent();
                        chai_1.expect(slickButton10Title).to.equal('FX NDF');
                        chai_1.expect(slickButton10Text).to.equal('PMS offers a specific instrument type for FX Non-Deliverable Forwards.');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Slick button 11 and the attached text', function () { return __awaiter(_this_1, void 0, void 0, function () {
            var slickButton11Title, slickButton11Text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.home.slickButton11.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.home.slickButton11Title.getText()];
                    case 2:
                        slickButton11Title = _a.sent();
                        return [4 /*yield*/, page.home.slickButton11Text.getText()];
                    case 3:
                        slickButton11Text = _a.sent();
                        chai_1.expect(slickButton11Title).to.equal('Multifactor Instrument');
                        chai_1.expect(slickButton11Text).to.equal('PMS offers a Multifactor instrument type. The theoretical pricing of such instruments is based on regression and multiple market or risk factors with a beta coefficient for each factor.');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
