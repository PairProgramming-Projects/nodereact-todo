import express from 'express'
import TodoModel from '../models/TodoModel.js'
import log from '../conf/log.js'
const router = express.Router()

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

export default router
