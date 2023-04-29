import { Request, Response } from 'express'
import { Task } from '../models/task.ts'

export const getAllTasks = (_: Request, res: Response) => {
    res.send('get all tasks')
}

export const createTask = async (req: Request, res: Response) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

export const getTask = (_: Request, res: Response) => {
    res.send('get one task')
}

export const updateTask = (_: Request, res: Response) => {
    res.send('update task')
}

export const deleteTask = (_: Request, res: Response) => {
    res.send('delete tasks')
}
