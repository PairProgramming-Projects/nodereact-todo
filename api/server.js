import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';
import swaggerDocs from "./utils/swagger.js";

const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.use(cors())

app.get('/', (req, res)=> res.send('Hello Server!!!'))

app.use('/todos', todoRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
    
    console.log(`Server started on port ${PORT}`);
    swaggerDocs(app, PORT);
});
