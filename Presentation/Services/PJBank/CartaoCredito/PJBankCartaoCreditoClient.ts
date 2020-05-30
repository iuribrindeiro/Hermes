import { PJBankClient } from '../Base/PJBankClient';
import { CreateCreditCardTokenFailedException } from './Exceptions/CreateCreditCardTokenFailedException';
import { IPJBankCreditCardClient } from './IPJBankCreditCardClient';
import { CreateTransactionCardModel } from "./CreateTransactionCardModel";
import { CreateCreditCardData } from "./CreateCreditCardData";

export class PJBankCartaoCreditoClient extends PJBankClient implements IPJBankCreditCardClient {
    public async createCreditCardToken(creditCardData: CreateCreditCardData): Promise<string> {
        try {
            var result = await this.httpClient.post(`${this.RecebimentosUrl}/tokens`, {
                nome_cartao: creditCardData.Name,
                numero_cartao: creditCardData.Number,
                mes_vencimento: creditCardData.ExpirationMonth,
                ano_vencimento: creditCardData.ExpirationYear,
                cpf_cartao: creditCardData.CpfOwner,
                email_cartao: creditCardData.Email,
                celular_cartao: creditCardData.PhoneNumber,
                codigo_cvv: creditCardData.Cvv,
            });
            return result.data.token_cartao;
        }
        catch (error) {
            throw new CreateCreditCardTokenFailedException(error);
        }
    }

    public async createTransaction(transactionModel: CreateTransactionCardModel): Promise<void> {
        try {
            await this.httpClient.post(this.TransacoesUrl, {
                token_cartao: transactionModel.Token,
                valor: transactionModel.Amount,
                parcelas: transactionModel.Installments,
                pedido_numero: transactionModel.OrderNumber,
                descricao_pagamento: transactionModel.PaymentDescription,
                webhook: transactionModel.Webhook,
            });
        } catch (error) {
            throw new CreateCreditCardTokenFailedException(error);
        }
    }
}


