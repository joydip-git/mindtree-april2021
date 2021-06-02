export class Employee {

    constructor(private name: string, private id: number, private basicPayment: number, private daPayment: number, private hraPayment: number) {

    }
    public get Id(): number {
        return this.id;
    }
    public set Id(val: number) {
        this.id = val;
    }

    public get Name(): string {
        return this.name;
    }
    public set Name(val: string) {
        this.name = val;
    }

    public get BasicPayment(): number {
        return this.basicPayment;
    }
    public set BasicPayment(val: number) {
        this.basicPayment = val;
    }

    public get DaPayment(): number {
        return this.daPayment;
    }
    public set DaPayment(val: number) {
        this.daPayment = val;
    }

    public get HraPayment(): number {
        return this.hraPayment;
    }
    public set HraPayment(val: number) {
        this.hraPayment = val;
    }

    public calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment
    }
}