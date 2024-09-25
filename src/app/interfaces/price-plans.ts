import { PricePlan } from "./price-plan";

export interface PricePlans {
    [planType: string]: PricePlan[]
}
