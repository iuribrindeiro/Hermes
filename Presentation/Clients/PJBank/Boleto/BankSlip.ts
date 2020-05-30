export class BankSlip {

    constructor(
        public readonly Identifier: string, 
        public readonly Number: string, 
        public readonly BankNumber: string, 
        public readonly Token: string, 
        public readonly Credential: string, 
        public readonly Url: string,
        public readonly CodeNumber: string) {
    }
}
