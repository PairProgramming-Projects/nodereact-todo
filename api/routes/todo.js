// import express from 'express'
import Todo from '../models/todo.js'
import { Router } from 'express';
import log from '../conf/log.js'
// const router = express.Router()

// router.get('/:userEmail', async (req, res) => {
//   const { email } = req.params
//   console.log('email:', email)
//   try {
//     const todoList = await TodoModel.findAll({
//       where: { email: email },
//     })
//     // console.log('todo list: ', todoList)
//     res.send(todoList)
//   } catch (err) {
//     log.error(err)
//   }
// })


export default function todos() {
    const router = Router();

    router
        .post('/', async (req, res) => {
            try {
                const model = req.body;
                const t = await Todo.create({
                    user_id: model.user_id,
                    text: model.text,
                });
                res.json(t.toJSON());
            } catch (err) {
                log.error(err)
            }
        });

    return router;
}