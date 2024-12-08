import mongoose, { Mongoose } from 'mongoose';

const connectDB = async () => {

    mongoose.connection.on('Connected', () => {
        console.log('Connected to MongoDB')
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}

export default connectDB;
