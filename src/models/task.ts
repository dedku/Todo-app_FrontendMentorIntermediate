import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    name: String,
    compleated: Boolean
})

export const Task = mongoose.model('Task', TaskSchema)