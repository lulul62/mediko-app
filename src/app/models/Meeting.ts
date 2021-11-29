export class Meeting {
    constructor(public customer: string,
        public email: string,
        public date: Date,
        public reason: string, public phoneNumber: string) { }
}