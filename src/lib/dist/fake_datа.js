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
    Faker.prototype.firstName = function () {
        return faker.name.firstName();
    };
    Faker.prototype.lastName = function () {
        return faker.name.lastName();
    };
    Faker.prototype.address = function () {
        return faker.address.cardinalDirection();
    };
    Faker.prototype.country = function () {
        return faker.address.country();
    };
    Faker.prototype.image = function () {
        return faker.random.image();
    };
    return Faker;
}());
exports.Faker = Faker;
