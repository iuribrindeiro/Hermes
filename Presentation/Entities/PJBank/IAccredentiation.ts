import { IBaseEntity as IBaseEntity } from "../Base/IBaseEntity";

export interface IAccredentiation extends IBaseEntity {
    TenantId: string;
    Credential: string;
    Key: string;
}
