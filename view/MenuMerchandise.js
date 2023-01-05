"use strict";
exports.__esModule = true;
exports.MenuMerchandise = void 0;
var ManagerMerchandise_1 = require("../controller/ManagerMerchandise");
var Merchandise_1 = require("../model/Merchandise");
var readlineSync = require('readline-sync');
var MenuMerchandise = /** @class */ (function () {
    function MenuMerchandise() {
        this.menuMerchandise = new ManagerMerchandise_1.ManagerMerchandise();
        this.menu = "\n    Day la menu quan ly hang hoa\n    1.Hien thi \n    2.Tim kiem hang hoa theo ten san pham\n    3.Them hang hoa moi\n    4.Cap nhat hang hoa theo ma hang\n    5.Xoa hang hoa theo ma hang\n    6.Thoat";
    }
    MenuMerchandise.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Vui long chon: ");
                if (choice < 1 || choice > 6) {
                    console.log("Ban da chon sai.Vui long chon lai: ");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1:
                    this.menuMerchandise.display();
                    break;
                case 2:
                    var findName = readlineSync.question("Nhap ten muon tim kiem: ");
                    console.table(this.menuMerchandise.findByName(findName));
                    break;
                case 3:
                    var date = new Date();
                    var code = +readlineSync.question("Nhap ma hang: ");
                    var name_1 = readlineSync.question("Nhap ten mat hang: ");
                    var type = readlineSync.question("Nhap loai mat hang: ");
                    var price = +readlineSync.question("Nhap gia mat hang: ");
                    var quantity = readlineSync.question("Nhap so luong mat hang: ");
                    var day = date.getDate();
                    var describe = readlineSync.question("Nhap mo ta mat hang: ");
                    var data = new Merchandise_1.Merchandise(code, name_1, type, price, quantity, day, describe);
                    this.menuMerchandise.add(data);
                    break;
                case 4:
                    var Code = +readlineSync.question("Nhap ma hang muon sua: ");
                    var codee = +readlineSync.question("Nhap ma hang muon cap nhat: ");
                    var namee = readlineSync.question("Nhap ten mat hang muon cap nhat: ");
                    var typee = readlineSync.question("Nhap loai mat hang muon cap nhat: ");
                    var pricee = +readlineSync.question("Nhap gia mat hang muon cap nhat: ");
                    var quantityy = readlineSync.question("Nhap so luong mat hang muon cap nhat: ");
                    var dayy = +readlineSync.question("Nhap ngay nhap hang muon cap nhat: ");
                    var describee = readlineSync.question("Nhap mo ta mat hang muon cap nhat: ");
                    var Data = new Merchandise_1.Merchandise(codee, namee, typee, pricee, quantityy, dayy, describee);
                    this.menuMerchandise.update(Code, Data);
                    console.log("Update thanh cong");
                    break;
                case 5:
                    var Codee = +readlineSync.question("Nhap ma hang muon xoa: ");
                    this.menuMerchandise.deleteCode(Codee);
                    break;
                case 6:
                    return;
            }
        }
    };
    return MenuMerchandise;
}());
exports.MenuMerchandise = MenuMerchandise;
