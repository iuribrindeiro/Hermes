import { PJBankClient } from "../Base/PJBankClient";
import { IPJBankSlipClient } from "./IPJBankSlipClient";
import { CreateBankSlipData } from "./CreateBankSlipData";
import { BankSlip } from "./BankSlip";
import { CreateBankSlipFailedException } from "./Exceptions/CreateBankSlipFailedException";

export class PJBankSlipClient extends PJBankClient implements IPJBankSlipClient {

    public async createBankSlip(bankSlipData: CreateBankSlipData): Promise<BankSlip> {
        try {
            var result = await this.httpClient.post(this.TransacoesUrl, {
                vencimento: bankSlipData.DueDate,
                valor: bankSlipData.Amount,
                juros: bankSlipData.Interest,
                juros_fixo: bankSlipData.InterestFixed,
                multa: bankSlipData.Assessment,
                multa_fixo: bankSlipData.AssessmentFixed,
                desconto: bankSlipData.Discounts[0].Amount,
                diasdesconto1: bankSlipData.Discounts[0].DaysToApplyDiscount,
                desconto2: bankSlipData.Discounts[1].Amount,
                diasdesconto2: bankSlipData.Discounts[1].DaysToApplyDiscount,
                desconto3: bankSlipData.Discounts[2].Amount,
                diasdesconto3: bankSlipData.Discounts[2].DaysToApplyDiscount,
                nome_cliente: bankSlipData.ClientInfo.Name,
                email_cliente: bankSlipData.ClientInfo.Email,
                telefone_cliente: bankSlipData.ClientInfo.PhoneNumber,
                cpf_cliente: bankSlipData.ClientInfo.CpfCnpj,
                endereco_cliente: bankSlipData.ClientInfo.Address.Street,
                numero_cliente: bankSlipData.ClientInfo.Address.Number,
                complemento_cliente: bankSlipData.ClientInfo.Address.Observations,
                bairro_cliente: bankSlipData.ClientInfo.Address.Neighborhood,
                cidade_cliente: bankSlipData.ClientInfo.Address.City,
                estado_cliente: bankSlipData.ClientInfo.Address.State,
                cep_cliente: bankSlipData.ClientInfo.Address.ZipCode,
                logo_url: bankSlipData.BrandLogo,
                texto: bankSlipData.Text,
                instrucao_adicional: bankSlipData.AdditionalInfo,
                webhook: bankSlipData.Webhook,
                pedido_numero: bankSlipData.OrderNumber,
            });
            return new BankSlip(
                result.data.id_unico, result.data.nossonumero, 
                result.data.banco_numero, result.data.token_facilitador, 
                result.data.credencial, result.data.linkBoleto, 
                result.data.linhaDigitavel);
        } catch (error) {
            throw new CreateBankSlipFailedException(error);
        }
    }
}

