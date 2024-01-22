import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import AddForm from './AddForm';
import EditForm from './EditForm';
import '../App.css';

const TodoList = () => {
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
        <Container maxWidth="xl" sx={{ p: 5, textAlign: 'center' }}>
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
            <List sx={{ width: '100ch', flex: 'justify', m: 10 }}>
            {/* <List sx={{ width: '100ch', textAlign: 'center', p: 5 }}> */}
                { todos.map((todo) => (
                            <TodoItem key={todo.id} todoItem={todo} getTodos={getTodos} isEditing={setIsEditing} setCurrentTodo={setCurrentTodo} />
                    ))
                }
            </List>
        </Container>
    )
}

export default TodoList;
// display: { xs: 'none', md: 'flex' }, mr: 1 