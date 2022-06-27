import { Category } from "./category";
import { Variety } from "./variety";

export class Product {
    public constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public category?: Category,
        public category_id?: number,
        public varieties?:Variety[],
        public image?: string,
        public status?: string,
        public belong?: string,
        public created_at?: string,
        public updated_at?: string
    ) { }
}
