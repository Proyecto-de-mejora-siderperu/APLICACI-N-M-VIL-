import { Answer } from "./answer";
import { User } from "./user";

export class Question {
    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public created_at?: string,
        public updated_at?: string,
        public user?: User,
        public answers?: Answer[]
    ){

    }
}
