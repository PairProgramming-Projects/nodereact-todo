import express from 'express'
import TodoModel from '../models/TodoModel.js'
import log from '../conf/log.js'
const router = express.Router()

/**
 * @openapi
 * paths:
 *  /:
 *    get:
 *      summary: Create a todo item
 *      requestBody:
 *        description: Add a todo using user email
 *      responses:
 *        '200':
 *          description: Success
 *          parameters:
 *            - user_email: name_prefix
 */
router.get('/:userEmail', async (req, res) => {
    const { userEmail } = req.params
    try {
      const todoList = await TodoModel.findAll({
        where: { user_email: userEmail },
      })
      res.send(todoList)
    } catch (err) {
      log.error(err)
    }
  })

/**
 * @openapi
 *  /create:
 *    post:
 *      summary: Create a todo item
 *      requestBody:
 *        description: Add a todo using user email
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 */
router.post('/create', async (req, res) => {
  const values = {
    user_email: req.body.data.user_email,
    title: req.body.data.title,
    progress: req.body.data.progress,
    date: req.body.data.date,
  }
  try {
    const newTodo = await TodoModel.create(values)
    return res.status(201).json({ status: 'success', message: 'Data saved successfully' });
  } catch (err) {
    log.error(err)
    return err
  }
})

/**
 * @openapi
 *  /delete:
 *    post:
 *      summary: Delete a todo item
 *      requestBody:
 *        description: Add a todo using user email
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedTodo = await TodoModel.destroy({
      where: { id },
    })
    console.log('deleted todo : ', deletedTodo) // shows number of items deleted
    return res
      .status(204)
      .json({ status: 'success', message: 'Data deleted successfully' })
  } catch (err) {
    console.log(err)
  }
})

/**
 * @openapi
 *  /update:
 *    put:
 *      summary: Update a todo item
 *      requestBody:
 *        description: Add a todo using user email
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 */
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await TodoModel.update(
        {
            title
        },
        {
            where: { id },
        })
        res.status(204).json({ status: 'Success', message: 'Data updated successfully' });
    } catch (err) {
      log.error(err)
    }
  })


  // Delete all selected IDs
  router.delete('/delete', async (req, res) => {
    const { ids } = req.body;
    try {
        await TodoModel.destroy(
        {
            title
        },
        {
            where: { id: ids },
        })
        res.status(204).json({ status: 'Success', message: 'Data updated successfully' });
    } catch (err) {
      log.error(err)
    }
  })

export default router
