import { Question } from "./question";
import { User } from "./user";

export class Form {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public status?: string,
        public created_at?: string,
        public updated_at?: string,
        public editTitle:boolean=false,
        public editDescription:boolean=false,
        public user?: User ,
        public questions?: Question[]
    ){}
}