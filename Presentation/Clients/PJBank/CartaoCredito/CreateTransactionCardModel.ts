export class CreateTransactionCardModel {
    public Token!: string;
    public Amount!: number;
    public Installments: number = 0;
    public OrderNumber!: string;
    public PaymentDescription!: string;
    public Webhook!: string;
}
