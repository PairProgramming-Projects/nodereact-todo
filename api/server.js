import express from 'express';
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res)=> res.send('Hello Server!!!'))

app.use('/todos', todoRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT,console.log(`server started on port ${PORT}`) )
