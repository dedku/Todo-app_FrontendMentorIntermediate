import express, { Router } from 'express'
import { getAllTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/tasks.ts'

const tasks: Router = express.Router()

tasks.route('/').get(getAllTasks).post(createTask)
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default tasks