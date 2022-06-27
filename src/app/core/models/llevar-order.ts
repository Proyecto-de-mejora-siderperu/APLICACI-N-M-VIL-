import { Employe } from "./employe";
import { Order } from "./order";
import { User } from "./user";

export class LlevarOrder {
    public constructor(
        public id?: string,
        public number?: string,
        public client_id?: string,
        public user_id?: number,
        public user?: Employe,
        public order_id?: string,
        public order?: Order,
        public created_at?: string,
        public updated_at?: string
    ){

    }
}
