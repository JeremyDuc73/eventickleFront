import {Equipment} from "./Equipment.ts";
import {Availability} from "./Availability.ts";

export interface Establishment {

    siret: string
    description : string
    adress : string
    availability : Availability[]
    accessibility : string
    equipments : Equipment[]
    name : string
    events: string
    phoneNumber: string
}