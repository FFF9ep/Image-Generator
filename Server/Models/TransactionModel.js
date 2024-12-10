import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    
})

const transactionModel = mongoose.models.user || mongoose.model("transaction", transactionSchema)

export default userModel;
