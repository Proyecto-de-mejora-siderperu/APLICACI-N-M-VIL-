export class Promotion {

    public constructor(
        public id?: number,
        public code?: string,
        public description?: string,
        public image?: string,
        public discount?: number,
        public type?: string,
        public quantity?: number,
        public quantity_used?: number,
        public start_date?: string,
        public end_date?: string,
        public status?: string,
        public created_at?: string,
        public updated_at?: string
    ) {

    }

}
