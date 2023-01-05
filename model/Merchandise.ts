export class Merchandise{
    private code:number;
    private name:string;
    private type:string;
    private price:number;
    private quantity:number;
    private day:number;
    private describe:string

    constructor(code: number, name: string, type: string, price: number, quantity: number, day: number, describe: string) {
        this.code = code;
        this.name = name;
        this.type = type
        this.price = price;
        this.quantity = quantity;
        this.day = day;
        this.describe = describe;
    }

    getCode(): number {
        return this.code;
    }

    setCode(value: number) {
        this.code = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(value: number) {
        this.quantity = value;
    }

    getDay(): number {
        return this.day;
    }

    setDay(value: number) {
        this.day = value;
    }

    getDescribe(): string {
        return this.describe;
    }

    setDescribe(value: string) {
        this.describe = value;
    }
}