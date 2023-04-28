import express, { Router, Request, Response } from 'express'
const tasks: Router = express.Router()

tasks.route('/').get((_: Request, res: Response) => {
    res.send('all items')
})

export default tasks