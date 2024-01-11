import express from 'express';

const app = express()

app.get('/', (req, res)=> res.send('Hello Server!!!'))

const PORT = process.env.PORT || 8000

app.listen(PORT,console.log(`server started on port ${PORT}`) )
