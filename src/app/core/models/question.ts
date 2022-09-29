import { Answer } from "./answer";
import { User } from "./user";

export class Question {
    constructor(
        public id?: number,
        public title?: string,
        public value?:number,
        public content?: string,
        public type?:string,
        public created_at?: string,
        public updated_at?: string,
        public edit: boolean=false,
        public user?: User,
        public answers?: Answer[]
    ){
    }
}
