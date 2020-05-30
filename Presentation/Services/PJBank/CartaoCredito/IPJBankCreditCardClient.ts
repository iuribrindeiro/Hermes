import { IPJBankClient } from '../Base/IPJBankClient';
import { CreateCreditCardData } from './CreateCreditCardData';
import { CreateTransactionCardModel } from './CreateTransactionCardModel';

export interface IPJBankCreditCardClient extends IPJBankClient {
    createCreditCardToken(creditCardData: CreateCreditCardData): Promise<string>
    createTransaction(transactionModel: CreateTransactionCardModel): Promise<void>;
}


