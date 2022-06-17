import { Question } from "./question";
import { User } from "./user";

export class Form {
    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public created_at?: string,
        public updated_at?: string,
        public user?: User ,
        public questions?: Question[]
    ){}
}
