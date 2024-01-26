import { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import AddForm from './AddForm';
import EditForm from './EditForm';
import '../App.css';
import Note from './Note';
import { Button } from '@mui/material';
import DeleteAllDialog from './DeleteDialog';

const TodoList = () => {
    // const [checked, setChecked] = useState([]);
    const userEmail = 'example@email.com';
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);

    const checkboxHandler = (e) => {
      let isSelected = e.target.checked;
      let value = parseInt(e.target.value);
  
      if( isSelected ){
        setSelectedItems( [...selectedItems, value ] )
      } else {
        setSelectedItems( (prevData) => {
          return prevData.filter( (id) => {
            return id !== value;
          })
        })
      }
    }

    const getTodos = async () => {
      try {
          const response = (
          await axios.get(`http://localhost:8000/todos/${userEmail}`)).data
          setTodos(response)
          setCount(response.length)
      } catch (err) {
        console.log(err)
      }
    }

    const handleClickDeleteAllDialog = () => {
        console.log(selectedItems)
        setOpen(true)
    }
        
    useEffect(() => getTodos, [])

    return (
        <Paper elevation={8} sx={{ p: 5, textAlign: 'center', bgcolor: 'primary.light', maxWidth: 'lg', height: '100%' }}>
            { isEditing ? (
                <EditForm
                    currentTodo={currentTodo}
                    getTodos={getTodos}
                    setIsEditing={setIsEditing}
                    setCurrentTodo={setCurrentTodo}
                />
            ) : (
                <AddForm getTodos={getTodos} />
            )}
            <Note count={count} sx={{ mt: 200, p: 100 }} />

            { selectedItems.length > 0 ? (
              <Paper elevation={0} sx={{ mt: 2, display: 'flex', justifyContent: 'center', bgcolor: 'primary.light' }}>
                <Button variant='outlined' sx={{ mr: 1 }} onClick={ () => handleClickDeleteAllDialog() } >Delete selected items</Button>
                <Button variant='outlined' sx={{ ml: 1 }} onClick={ () => setSelectedItems([]) } >Unselect items</Button>
              </Paper>
              ) : (
              <Button disabled sx={{ mt: 2 }}/>
            )}

            { open ? <DeleteAllDialog open={open} setOpen={setOpen} getTodos={getTodos} selectedItems={selectedItems} setSelectedItems={setSelectedItems} /> : '' }

            <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'primary.light'}} >
                <List sx={{ flex: 'justify', m: 5, bgcolor: 'secondary' }}>
                    { todos.map((todo, index) => {
                        return (
                            <TodoItem
                            key={index}
                            todoItem={todo}
                            getTodos={getTodos}
                            isEditing={setIsEditing}
                            setCurrentTodo={setCurrentTodo}
                            checkboxHandler={checkboxHandler}
                            selectedItems={selectedItems}
                            />
                            )
                        }
                        )}
                </List>
            </Paper>
        </Paper>
    )
}

export default TodoList;