import { Question } from "./question";

export class Answer {
    public constructor(
        public id?:string,
        public content?:string,
        public value?:string,
        public question_id?:number,
        public status?:string,
        public edit: boolean=false,
        public created_at?:string,
        public updated_at?:string
    ){

    }
}
