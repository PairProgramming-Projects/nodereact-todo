import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
app.use(bodyParser.json());

app.use(cors())

app.get('/', (req, res)=> res.send('Hello Server!!!'))

app.use('/todos', todoRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT,console.log(`server started on port ${PORT}`) )
