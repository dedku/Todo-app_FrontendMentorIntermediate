import express, { Express } from 'express'
import connectDB from './db/connect.ts'
import tasks from './routes/tasks.ts'

const app: Express = express()
const port: number = 3000

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`Server is listening on Port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()