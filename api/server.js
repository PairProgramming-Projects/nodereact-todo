import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.js';
import sequelize from './models/index.js';
import log from './conf/log.js';
import configure from './routes/index.js';

// const app = express()

// app.use(cors())

// app.get('/', (req, res)=> res.send('Hello Server!!!'))

// app.use('/todos', todoRoutes)

// const PORT = process.env.POSTGRES_PORT || 8000;

// app.listen(PORT,console.log(`server started on port ${PORT}`) )

// const { sequelize } = require('./sequelize/models');
const app = express();
const port = process.env.PORT || 8000;

// configure(app);

const connectDb = async () => {
    console.log('Checking database connection...');

    try {
        await sequelize.authenticate();
        log.info('Database connection established.');
    } catch(err) {
        log.error('Database connection failed', err);
        process.exit(1);
    }
};

(async () => {
    await connectDb();

    console.log(`Attempting to run server on port ${port}`);

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})();