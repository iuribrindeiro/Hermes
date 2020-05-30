import { ICreditCardToken } from './../../../Presentation/Entities/PJBank/ICreditCardToken';
import mongoose from 'mongoose';
import { timestamps } from './AccredentiationSchema';

const CreditCardTokenSchema = new mongoose.Schema<ICreditCardToken>({
    Token: {
        required: true,
        type: String
    },
    TenantId: {
        required: true,
        type: String
    }
}, timestamps);

export default mongoose.model<ICreditCardToken>("CreditCardToken", CreditCardTokenSchema);