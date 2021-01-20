"use strict";
exports.__esModule = true;
exports.Faker = void 0;
var faker = require("faker");
var Faker = /** @class */ (function () {
    function Faker() {
    }
    Faker.prototype.fakeEmail = function () {
        return faker.internet.email();
    };
    Faker.prototype.fakePass = function () {
        return faker.internet.password();
    };
    return Faker;
}());
exports.Faker = Faker;
