export class User {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public role?: string,
        public created_at?: string,
        public updated_at?: string
    ){}
}
