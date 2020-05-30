export class PJBankClientOptions {
    private key!: string;
    private credential!: string;
    public credentialsKeyChanged: ((credential: string, key: string) => void)[] = [];
    public get Key(): string {
        return this.key;
    }
    public get Credential(): string {
        return this.credential;
    }
    constructor(public readonly ApiUrl: string) { }
    public setCredentialKey(credential: string, key: string) {
        this.credential = credential;
        this.key = key;
        this.credentialsKeyChanged.forEach(event => event(credential, key))
    }
}
