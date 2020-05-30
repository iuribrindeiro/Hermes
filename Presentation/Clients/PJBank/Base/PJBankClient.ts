import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import mongoose from 'mongoose';
import { PJBankClientOptions } from './PJBankClientOptions';
import { Accreditation } from "./Accreditation";
import { CreateAccreditationDataModel } from "./CreateAccreditationDataModel";
import { IPJBankClient } from "./IPJBankClient";
import { AccreditationFailedException } from './AccreditationFailedException';


export abstract class PJBankClient implements IPJBankClient {
    protected readonly httpClient: AxiosInstance;

    constructor(private readonly options: PJBankClientOptions) {
        this.httpClient = axios;
        this.httpClient.defaults = this.buildDefaultsHttpClient();
        options.credentialsKeyChanged.push((credential:string, key: string) => this.httpClient.defaults = this.buildDefaultsHttpClient())
    }
    
    public async accredit(accreditateData: CreateAccreditationDataModel): Promise<Accreditation> {
        try {
            var result = await this.httpClient.post('recebimentos', {
                'nome_empresa': accreditateData.CompanyName,
                'conta_repasse': accreditateData.BankAccount,
                'agencia_repasse': accreditateData.BankBranch,
                'banco_repasse': accreditateData.BankCode,
                'cnpj': accreditateData.Cnpj,
                'ddd': accreditateData.DddPhoneNumber,
                'telefone': accreditateData.PhoneNumber,
                'email': accreditateData.Emails.join(';'),
            }, { headers: {} });

            return new Accreditation(result.data.credencial, result.data.chave);
        } catch (error) {
            throw new AccreditationFailedException(error);
        }
    }

    private buildHeaders(): any {
        return this.options.Key && { 'X-CHAVE': this.options.Key } || {};
    }

    private buildDefaultsHttpClient(): AxiosRequestConfig {
        return { url: this.options.ApiUrl, headers: this.buildHeaders() };
    }

    private getCredencial() {
        return `${this.options.Credential && this.options.Credential || ''}`
    }

    protected get RecebimentosUrl(): string {
        return `recebimentos/${this.getCredencial()}`
    }

    protected get TransacoesUrl(): string {
        return `${this.RecebimentosUrl}/transacoes`;
    }
}


