import { Employee } from "./employee";

export class Hr extends Employee {
    constructor(name: string, id: number, basic: number, da: number, hra: number, private gratuityPayment: number) {
        super(name, id, basic, da, hra)
    }
    public get GratuityPayment(): number {
        return this.gratuityPayment;
    }
    public set GratuityPayment(val: number) {
        this.gratuityPayment = val;
    }
    public calculateSalary() {
        return super.calculateSalary() + this.gratuityPayment
    }
}