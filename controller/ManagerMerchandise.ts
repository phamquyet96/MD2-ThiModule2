import {Merchandise} from "../model/Merchandise";

export class ManagerMerchandise{
    result=[];
    listMerchandise:Merchandise[]=[];
    constructor() {
        this.listMerchandise.push(new Merchandise(1,"mi tom","do an",1000,100,4-1-2023,"an song"));
        this.listMerchandise.push(new Merchandise(2,"mi lanh","do an",2000,200,5-1-2023,"an chin"));
        this.listMerchandise.push(new Merchandise(3,"sting","nuoc",3000,300,4-1-2023,"do uong"));
        this.listMerchandise.push(new Merchandise(4,"coca","nuoc",4000,400,5-1-2023,"nuoc uong"));
        this.listMerchandise.push(new Merchandise(5,"sprite","nuoc",5000,500,4-1-2023,"nuoc uong"));
    }
    add(item:Merchandise){
        this.listMerchandise.push(item);
    }
    display(){
        if(this.listMerchandise.length==0){
            console.log("Khong co du lieu")
        }
        console.table(this.listMerchandise)
    }
    update(code:number,newObject:Merchandise){
        let index=this.findByCode(code);
        if(index == -1){
            console.log("Khong ton tai mat hang can update")
        }
        this.listMerchandise.splice(index,1,newObject)
    }
    deleteCode(code:number){
        let index=this.findByCode(code);
        if(index == -1){
            console.log("Khong ton tai mat hang can xoa")
        }
        this.listMerchandise.splice(index,1)
    }
    findByCode(code:number){
        for (let i = 0; i <this.listMerchandise.length; i++) {
            if (this.listMerchandise[i].getCode() === code) {
                return i;
            }
        }
        return -1;
    }
    findByName(name:string) {
        this.listMerchandise.forEach((item, index) => {
            if (item.getName().includes(name)) {
                this.result.push(item);
            }
        })
        return this.result;
    }
}