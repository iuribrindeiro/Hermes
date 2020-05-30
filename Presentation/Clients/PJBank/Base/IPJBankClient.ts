import { Accreditation } from "./Accreditation";
import { CreateAccreditationDataModel as CreateAccreditationDataModel } from "./CreateAccreditationDataModel";
export interface IPJBankClient {
    accredit(accreditateData: CreateAccreditationDataModel): Promise<Accreditation>;
}
