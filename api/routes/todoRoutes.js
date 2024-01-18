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
    const values = {
        user_email: req.body.data.user_email,
        title: req.body.data.title,
        progress: req.body.data.progress,
        date: req.body.data.date,
      }
    const { id } = req.params
    console.log('Put method values:', values)
    try {
      const updatedTodo = await TodoModel.update(
        {
            title: values.title
        },
        {
            where: { id },
        })
        updatedTodo = updatedTodo.save();
        console.log('Updated todo item: ', updatedTodo)
        res.status(200).json({ status: 'Success', message: 'Data updated successfully' });
    } catch (err) {
      log.error(err)
    }
  })

export default router
