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
    const [data, setData] = useState({
        user_email:  'example@email.com',
        title: '',
        progress: 0,
        date: new Date(),
      });
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

    const handleAddInputChange = (e) => {
        const { value } = e.target
        setData((data) => ({
        ...data, title: value
        }))
        console.log(data)
    };

        
    const handleAddFormSubmit = async (e) => {
        e.preventDefault()
        try {
            if( data.title !== '') {
                const response = await axios.post('http://localhost:8000/todos/create', {
                    data: data,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                getTodos()
                setData( { title: '' } )
                console.log('add form submit response:', response)
            }
        } catch (error) {
            console.log(error)
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
                <AddForm todo={data} onAddInputChange={handleAddInputChange} onAddFormSubmit={handleAddFormSubmit} />
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
