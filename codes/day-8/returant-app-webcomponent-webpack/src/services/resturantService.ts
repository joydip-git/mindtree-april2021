import { resturants } from "../data/repository";
import { Resturant } from "../models/restutant";

export class ResturantService {
    public getResturants(): Resturant[] {
        return resturants;
    }
    public addResturant(resturant: Resturant): void {

    }
}