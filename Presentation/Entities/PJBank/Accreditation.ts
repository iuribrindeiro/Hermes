import { BaseEntity } from "../Base/BaseEntity";

export class Accreditation extends BaseEntity {
    constructor(public readonly Credential: string, public readonly Key: string) { 
        super();
    }
}
