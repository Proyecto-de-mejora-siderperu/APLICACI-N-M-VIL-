export class User {
    public constructor(
        public id?: number,
        public name?: string,
        public dni?: string,
        public email?: string,
        public status?: string,
        public created_at?: string,
        public updated_at?: string,
        public password?: string,
        public role_id?: number,
        public role?: string,
        public permissions?: string
    ){

    }
}
