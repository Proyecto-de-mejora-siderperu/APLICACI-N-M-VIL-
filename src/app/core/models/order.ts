import { Client } from "./client";
import { OrderDetails } from "./order-details";
import { User } from "./user";

export class Order {
    public constructor(
        public id?: string,
        public number?: string,
        public code?: string,
        public date?: string,
        public total?: number,
        public subtotal?: number,
        public discount?: number,
        public status?: string,
        public client?: Client,
        public user?: User,
        public user_id?: string,
        public mesero?: User,
        public mesero_id?: string,
        public observations?:string,
        public details?: OrderDetails[],
        public detalles?: OrderDetails[],
        public created_at?: string,
        public updated_at?: string,
        public type?: string,
        public tables?:string,
        public othertables?:string,
        public clientreference?:string,
        public payment_status?: string,
        public anotation?:string,
        public web: boolean=false,
        
    ){}
}
