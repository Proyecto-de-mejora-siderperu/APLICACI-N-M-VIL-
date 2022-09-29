export class User {
    public constructor(
        public id?: number,
        public ficha_sap?: string,
        public name?: string,
        public area?: string,
        public gerencia?: string,
        public superior_inmediato?: string,
        public email?: string,
        public email_verified_at?: string,
        public password?: string,
        public role?: string,
        public remember_token?: string,
        public created_at?: string,
        public updated_at?: string
    ) {

    }
}
