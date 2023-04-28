import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hellow word")
})

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`)
})