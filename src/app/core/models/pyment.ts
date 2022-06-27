import { Client } from "./client";
import { Order } from "./order";
import { PymentType } from "./pyment-type";
import { User } from "./user";

export class Pyment {
    public constructor(
        public id?:number,
        public user_id?:number,
        public client_id?:number,
        public order_id?:number,
        public pyment_type_id?:number,
        public user?:User,
        public client?:Client,
        public order?:Order,
        public pyment_type?:PymentType,
        public amount?:number,
        public amount_paid?:number,
        public discount?: number,
        public created_at?:number,
        public updated_at?:number,
        public comprobante?:string
    ){}
}
