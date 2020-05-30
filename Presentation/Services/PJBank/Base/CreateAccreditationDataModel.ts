export class CreateAccreditationDataModel {
    public CompanyName!: string;
    public BankAccount!: string;
    public BankBranch!: string;
    public BankCode!: string;
    public Cnpj!: string;
    public DddPhoneNumber!: string;
    public PhoneNumber!: string;
    public Emails: string[] = [];
    public CreditCard: boolean = false;
}
