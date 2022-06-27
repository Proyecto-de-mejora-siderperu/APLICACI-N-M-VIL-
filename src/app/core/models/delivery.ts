import { Order } from "./order";

export class Delivery {
    constructor(
        public id?: number,        
        public order?: Order,
        public order_id?: number,
        public date?:string,
        public address?: string,
        public phone?: string,
        public cellphone?: string,
        public observations?: string,
        public reference?:string, 
        public status?: string,
        public payment_status?: string,
        public created_at?: string,
        public updated_at?: string
    ){}
}
