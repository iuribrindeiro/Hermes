import { Discount } from "./Discount";
import { BankSlipClient } from "./BankSlipClient";
export class CreateBankSlipData {
    public DueDate!: Date;
    public Amount!: number;
    public Interest: number = 0;
    public InterestFixed: boolean = false;
    public Assessment: number = 0;
    public AssessmentFixed: boolean = false;
    public Discounts: Discount[] = [new Discount(), new Discount(), new Discount()];
    public ClientInfo!: BankSlipClient;
    public BrandLogo!: string;
    public Text!: string;
    public AdditionalInfo!: string;
    public Webhook!: string;
    public OrderNumber!: string;
}
