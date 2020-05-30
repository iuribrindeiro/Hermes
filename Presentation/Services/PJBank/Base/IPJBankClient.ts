import { Accreditation } from "../../../Entities/PJBank/Accreditation";
import { CreateAccreditationDataModel as CreateAccreditationDataModel } from "./CreateAccreditationDataModel";
export interface IPJBankClient {
    accredit(accreditateData: CreateAccreditationDataModel): Promise<Accreditation>;
}
