import {Equipment} from "./Equipment.ts";
import {Availability} from "./Availability.ts";
import {Event} from "./Event.ts";
export interface Establishment {
    id:number
    siret: string
    description : string
    address : string
    availability : Availability[]
    accessibility : string
    equipments : Equipment[]
    name : string
    events: Event[]
    phoneNumber: string
    image : string
}