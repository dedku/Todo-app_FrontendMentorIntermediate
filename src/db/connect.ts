import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_PORT}/?retryWrites=true&w=majority`

const connectDB = (): Promise<typeof mongoose> => {
    return mongoose
        .connect(connectionString)
}

export default connectDB