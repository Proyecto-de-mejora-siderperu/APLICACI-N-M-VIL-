import { Order } from "./order";
import { Table } from "./table";

export class LocalOrder {
    public constructor(
        public id?: number,
        public order?: Order,
        public order_id?: number,
        public tables?:string,
        public table?:Table,
        public othertables?:Table[],
        public created_at?: string,
        public updated_at?: string
    ){

    }


}
