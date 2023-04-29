import { Request, Response } from 'express'
import { Task } from '../models/task.ts'

export const getAllTasks = async (_: Request, res: Response) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const getTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        const taskDoesNotExist = !task
        if (taskDoesNotExist) {
            return res.status(404).json({ msg: `Cannot find task with id: ${taskID}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })

        const taskDoesNotExist = !task
        if (taskDoesNotExist) {
            return res.status(404).json({ msg: `Cannot find task with id: ${taskID}` })
        }

        res.status(201).json({ task: null, status: 'Task deleted successfully' })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })

        const taskDoesNotExist = !task
        if (taskDoesNotExist) {
            return res.status(404).json({ msg: `Cannot find task with id: ${taskID}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
