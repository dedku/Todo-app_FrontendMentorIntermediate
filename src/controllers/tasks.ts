import { Request, Response } from 'express'

export const getAllTasks = (_: Request, res: Response) => {
    res.send('get all tasks')
}

export const createTask = (_: Request, res: Response) => {
    res.send('create tasks')
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
