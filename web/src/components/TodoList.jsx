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

const TodoList = () => {
    const [checked, setChecked] = useState([]);
    const userEmail = 'example@email.com';
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
  
        if (currentIndex < 0) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        console.log('checked: ', checked)
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

    const handleClickDialog = () => {}
        
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

            { checked.length > 0 ? (
              <Button variant='outlined' sx={{ mt: 2 }} onClick={ () => handleClickDialog(checked) } >Delete selected items</Button> 
              ) : (
              <Button disabled sx={{ mt: 2 }}/>
            )}

            <Paper elevation={0} sx={{ p: 5, textAlign: 'center', bgcolor: 'primary.light'}} >
                <List sx={{ flex: 'justify', m: 5, bgcolor: 'secondary' }}>
                    { todos.map((todo) => {
                        return (
                            <TodoItem
                            // index={index}
                            key={todo.id}
                            todoItem={todo}
                            getTodos={getTodos}
                            isEditing={setIsEditing}
                            setCurrentTodo={setCurrentTodo}
                            checked={checked}
                            handleToggle={handleToggle}
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