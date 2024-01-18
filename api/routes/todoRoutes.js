import express from 'express'
import TodoModel from '../models/TodoModel.js'
import log from '../conf/log.js'
const router = express.Router()

router.post('/create', async (req, res) => {
  const values = {
    user_email: req.body.data.user_email,
    title: req.body.data.title,
    progress: req.body.data.progress,
    date: req.body.data.date,
  }
  try {
    const newTodo = await TodoModel.create(values)
    console.log('new todo : ', newTodo)
    return res.status(201).json({ status: 'success', message: 'Data saved successfully' });
  } catch (err) {
    log.error(err)
    return err
  }
})

router.get('/:userEmail', async (req, res) => {
  const { userEmail } = req.params
  // console.log('email:', userEmail)
  try {
    const todoList = await TodoModel.findAll({
      where: { user_email: userEmail },
    })
    // console.log('todo list: ', todoList)
    res.send(todoList)
  } catch (err) {
    log.error(err)
  }
})

router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    // console.log('email:', userEmail)
    try {
      const updatedTodo = await TodoModel.findOne({
        where: { id : id },
      })
      console.log('Updated todo item: ', updatedTodo)
      res.send(updatedTodo)
    } catch (err) {
      log.error(err)
    }
  })

export default router
