import { IPJBankClient } from "../Base/IPJBankClient";
import { BankSlip } from "./BankSlip";
import { CreateBankSlipData } from "./CreateBankSlipData";

export interface IPJBankSlipClient extends IPJBankClient {
    createBankSlip(bankSlipData: CreateBankSlipData): Promise<BankSlip>;
}


