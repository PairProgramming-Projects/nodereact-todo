import { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import AddForm from './AddForm';
import EditForm from './EditForm';
import '../App.css';

const TodoList = () => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        console.log('value: ', value)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        console.log('checked: ', checked)
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    }
    const userEmail = 'example@email.com';
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    const getTodos = async () => {
        try {
            const response = (
            await axios.get(`http://localhost:8000/todos/${userEmail}`)).data
            setTodos(response)
        } catch (err) {
          console.log(err)
        }
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
            <List sx={{ flex: 'justify', m: 10, bgcolor: 'secondary' }}>
                { todos.map((todo) => {
                    return (
                        <TodoItem
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
    )
}

export default TodoList;