export class Table {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
        public size?: string,
        public floor?: boolean,
        public status?: string,
        public availability?: string,
        public selected?: boolean,
        public disabled?: boolean,
        public created_at?: string,
        public updated_at?: string
    ){

    }
}
