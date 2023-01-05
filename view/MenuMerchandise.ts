import {ManagerMerchandise} from "../controller/ManagerMerchandise";
import {Merchandise} from "../model/Merchandise";
const readlineSync = require('readline-sync');
export class MenuMerchandise{
    private menuMerchandise:ManagerMerchandise=new ManagerMerchandise();
    private menu=`
    Day la menu quan ly hang hoa
    1.Hien thi 
    2.Tim kiem hang hoa theo ten san pham
    3.Them hang hoa moi
    4.Cap nhat hang hoa theo ma hang
    5.Xoa hang hoa theo ma hang
    6.Thoat`
    
    selection(){
        while(true){
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Vui long chon: ");
                if (choice < 1 || choice > 6) {
                    console.log("Ban da chon sai.Vui long chon lai: ");
                }
            } while (choice < 1 || choice > 6);
            switch (choice){
                case 1:
                    this.menuMerchandise.display();
                    break;
                case 2:
                    let findName=readlineSync.question("Nhap ten muon tim kiem: ");
                    console.table(this.menuMerchandise.findByName(findName));
                    break;
                case 3:
                    let date=new Date();
                    let code=+readlineSync.question("Nhap ma hang: ");
                    let name=readlineSync.question("Nhap ten mat hang: ");
                    let type=readlineSync.question("Nhap loai mat hang: ");
                    let price=+readlineSync.question("Nhap gia mat hang: ");
                    let quantity=readlineSync.question("Nhap so luong mat hang: ");
                    let day=date.getDate();
                    let describe=readlineSync.question("Nhap mo ta mat hang: ");
                    let data=new Merchandise(code,name,type,price,quantity,day,describe);
                    this.menuMerchandise.add(data);
                    break;
                case 4:
                    let Code=+readlineSync.question("Nhap ma hang muon sua: ");
                    let codee=+readlineSync.question("Nhap ma hang muon cap nhat: ");
                    let namee=readlineSync.question("Nhap ten mat hang muon cap nhat: ");
                    let typee=readlineSync.question("Nhap loai mat hang muon cap nhat: ");
                    let pricee=+readlineSync.question("Nhap gia mat hang muon cap nhat: ");
                    let quantityy=readlineSync.question("Nhap so luong mat hang muon cap nhat: ");
                    let dayy=+readlineSync.question("Nhap ngay nhap hang muon cap nhat: ")
                    let describee=readlineSync.question("Nhap mo ta mat hang muon cap nhat: ");
                    let Data=new Merchandise(codee,namee,typee,pricee,quantityy,dayy,describee);
                    this.menuMerchandise.update(Code,Data);
                    console.log("Update thanh cong")
                    break;
                case 5:
                    let Codee=+readlineSync.question("Nhap ma hang muon xoa: ");
                    this.menuMerchandise.deleteCode(Codee);
                    console.log("Xoa thanh cong")
                    break;
                case 6:
                    return;
            }
        }
    }
}