import { Document } from 'mongoose';

export interface IBaseEntity extends Document {
    CreatedAt: Date;
    UpdatedAt?: Date;
}