import { Order } from "./order";
import { Product } from "./product";
import { Variety } from "./variety";

export class OrderDetails {
    public constructor(
        public id?: string,
        public product?: Product,
        public product_id?: string,
        public variety?:Variety,
        public variety_id?:string,
        public quantity?: number,
        public price?: number,
        public subtotal?: number,
        public created_at?: string,
        public updated_at?: string,
        public observation?: string,
        public discount?: number,
        public order?: Order,
        public order_id?: string,
        public completed?: boolean,
        public comanda?: string
    ) {
    }
}
