import { Product } from "./product";

export class Variety {
    constructor(
        public id?: number,
        public name?: string,
        public product_id?: number,
        public product?: Product,
        public price?: number,
        public selected: boolean=false,
        public observation?:string,
        public quantity?: number,
        public subtotal?: number,
        public created_at?: string,
        public updated_at?: string,
    ){}

}
