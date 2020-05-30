import { IBaseEntity as IBaseEntity } from "../Base/IBaseEntity";

export interface ICreditCardToken extends IBaseEntity {
    Token: string;
    TenantId?: string;
}

