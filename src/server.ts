import express, { Express, Request, Response } from 'express'
import tasks from './routes/tasks.ts'

const app: Express = express()
const port: number = 3000


app.get('/', (_: Request, res: Response) => {
    res.status(200).send("Hellow word")
})

app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`)
})