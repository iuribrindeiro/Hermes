import mongoose from 'mongoose';
import { IAccredentiation } from '../../../Presentation/Entities/PJBank/IAccredentiation';

export const timestamps = { timestamps: { createdAt: 'CreatedAt', updatedAt: 'UpdatedAt' } };

const AcrredentiationSchema = new mongoose.Schema<IAccredentiation>({
    TenantId: {
        required: true,
        type: String
    },
    Credential: {
        required: true,
        type: String
    },
    Key: {
        required: true,
        type: String
    }
}, timestamps)

export default mongoose.model<IAccredentiation>("Accredentiation", AcrredentiationSchema);