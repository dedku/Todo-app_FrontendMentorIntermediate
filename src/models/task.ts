import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Task name is missing in provided request'],
        trim: true,
        min: [3, 'Task name is too short, please provide longer name, got {VALUE}'],
        maxLength: [20, 'Task name is too long, please provide shorten name (max 20 characters ), got {VALUE}']
    },
    compleated: {
        type: Boolean,
        require: true
    }
})

export const Task = mongoose.model('Task', TaskSchema)