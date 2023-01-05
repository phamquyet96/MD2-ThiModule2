"use strict";
exports.__esModule = true;
exports.ManagerMerchandise = void 0;
var Merchandise_1 = require("../model/Merchandise");
var ManagerMerchandise = /** @class */ (function () {
    function ManagerMerchandise() {
        this.result = [];
        this.listMerchandise = [];
        this.listMerchandise.push(new Merchandise_1.Merchandise(1, "mi tom", "do an", 1000, 100, 5 / 1 / 2023, "an song"));
        this.listMerchandise.push(new Merchandise_1.Merchandise(2, "mi lanh", "do an", 2000, 200, 4 / 1 / 2023, "an chin"));
        this.listMerchandise.push(new Merchandise_1.Merchandise(3, "sting", "nuoc", 3000, 300, 4 / 1 / 2023, "do uong"));
        this.listMerchandise.push(new Merchandise_1.Merchandise(4, "coca", "nuoc", 4000, 400, 5 / 1 / 2023, "nuoc uong"));
        this.listMerchandise.push(new Merchandise_1.Merchandise(5, "sprite", "nuoc", 5000, 500, 4 / 1 / 2023, "nuoc uong"));
    }
    ManagerMerchandise.prototype.add = function (item) {
        this.listMerchandise.push(item);
    };
    ManagerMerchandise.prototype.display = function () {
        if (this.listMerchandise.length == 0) {
            console.log("Khong co du lieu");
        }
        console.table(this.listMerchandise);
    };
    ManagerMerchandise.prototype.update = function (code, newObject) {
        var index = this.findByCode(code);
        if (index == -1) {
            console.log("Khong ton tai mat hang can update");
        }
        this.listMerchandise.splice(index, 1, newObject);
    };
    ManagerMerchandise.prototype.deleteCode = function (code) {
        var index = this.findByCode(code);
        if (index == -1) {
            console.log("Khong ton tai mat hang can xoa");
            return;
        }
        this.listMerchandise.splice(index, 1);
        console.log("Xoa thanh cong");
    };
    ManagerMerchandise.prototype.findByCode = function (code) {
        for (var i = 0; i < this.listMerchandise.length; i++) {
            if (this.listMerchandise[i].getCode() === code) {
                return i;
            }
        }
        return -1;
    };
    ManagerMerchandise.prototype.findByName = function (name) {
        var _this = this;
        this.listMerchandise.forEach(function (item, index) {
            if (item.getName().includes(name)) {
                _this.result.push(item);
            }
        });
        return this.result;
    };
    return ManagerMerchandise;
}());
exports.ManagerMerchandise = ManagerMerchandise;
