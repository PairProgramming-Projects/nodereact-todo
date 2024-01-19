import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import TodoItem from './components/TodoItem';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import './App.css';

const App = () => {
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
        <Container maxWidth="xl">
            <h1>TODO</h1>
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
            <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                { todos.map((todo) => (
                            <TodoItem key={todo.id} todoItem={todo} getTodos={getTodos} isEditing={setIsEditing} setCurrentTodo={setCurrentTodo} />
                    ))
                }
            </List>
        </Container>
    )
}

export default App;
