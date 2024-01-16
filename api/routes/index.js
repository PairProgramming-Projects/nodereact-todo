import express from 'express';
import { json } from 'body-parser';
// import { resolve } from 'path';
import api from './api.js';

export default function configure(app) {
    app
        .get('/', (req, res)=> res.send('Hello Server!!!'))
        .use(express.static('public'))
        .use(json())
        .use('/api', api())
        .use('/error', (req, res, next) => {
            next(new Error('Other Error'));
        })
        .use((req, res, next) => {
            next(new Error('Not Found'));
        });
        // .use((error, req, res, next) => {
        //     switch (error.message) {
        //         case 'Not Found':
        //             res.sendFile(resolve(__dirname, '../notfound.html'));
        //             return;
        //     }

        //     res.sendFile(resolve(__dirname, '../error.html'));
        // });
}