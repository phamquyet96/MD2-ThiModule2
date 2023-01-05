"use strict";
exports.__esModule = true;
exports.Merchandise = void 0;
var Merchandise = /** @class */ (function () {
    function Merchandise(code, name, type, price, quantity, day, describe) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.day = day;
        this.describe = describe;
    }
    Merchandise.prototype.getCode = function () {
        return this.code;
    };
    Merchandise.prototype.setCode = function (value) {
        this.code = value;
    };
    Merchandise.prototype.getName = function () {
        return this.name;
    };
    Merchandise.prototype.setName = function (value) {
        this.name = value;
    };
    Merchandise.prototype.getType = function () {
        return this.type;
    };
    Merchandise.prototype.setType = function (value) {
        this.type = value;
    };
    Merchandise.prototype.getPrice = function () {
        return this.price;
    };
    Merchandise.prototype.setPrice = function (value) {
        this.price = value;
    };
    Merchandise.prototype.getQuantity = function () {
        return this.quantity;
    };
    Merchandise.prototype.setQuantity = function (value) {
        this.quantity = value;
    };
    Merchandise.prototype.getDay = function () {
        return this.day;
    };
    Merchandise.prototype.setDay = function (value) {
        this.day = value;
    };
    Merchandise.prototype.getDescribe = function () {
        return this.describe;
    };
    Merchandise.prototype.setDescribe = function (value) {
        this.describe = value;
    };
    return Merchandise;
}());
exports.Merchandise = Merchandise;
