import { User } from "./user";

export class Evaluation {
    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public date_start?:string,
        public date_end?:string,
        public created_at?: string,
        public updated_at?: string,
        public for_user?: string,
        public form_id?: number,
        public user?: User
    ){}
}
