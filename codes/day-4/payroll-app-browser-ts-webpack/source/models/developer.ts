import { Employee } from "./employee";

export class Developer extends Employee {
    constructor(name: string, id: number, basic: number, da: number, hra: number, private incentivePayment: number) {
        super(name, id, basic, da, hra)
    }
    public get IncentivePayment(): number {
        return this.incentivePayment;
    }
    public set IncentivePayment(val: number) {
        this.incentivePayment = val;
    }
    public calculateSalary() {
        return super.calculateSalary() + this.incentivePayment
    }
}