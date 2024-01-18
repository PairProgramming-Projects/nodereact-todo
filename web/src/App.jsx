import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Controller, useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import TodoItem from './components/TodoItem';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import './App.css';

const App = () => {
    const userEmail = 'example@email.com';
    // const [todo, setTodo] = useState("");
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
            console.log('getTodos response:', response)
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
        // setTodo(e.target.value)
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
                console.log('response:', response)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleTodoUpdate = async (id, todoToUpdate) => {
        const request = { ...todoToUpdate, userEmail: 'example@email.com' };
        const updateResponse = await axios.put(`http://localhost:8000/todos/update/${id}`, request);
        // const todoToUpdate = todos.find((id) => todo.id === updatedTodo.id);
        console.log('Update response: ', updateResponse);
        // const updatedItem = todos.map((todo) => {
        //     return todo.id === id ? updatedTodo : todo;
        // });
        // setTodo(updatedItem);
        setIsEditing(false);
        getTodos();
    }
    
    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        handleTodoUpdate(currentTodo.id, currentTodo);
    }
    
    const handleEdit = async (todo) => {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }
    
    useEffect(() => getTodos, [])

    return (
        <Container maxWidth="xl">
            <h1>TODO</h1>
            { isEditing ? (
                <EditForm
                    currentTodo={currentTodo}
                    setIsEditing={setIsEditing}
                    onEditInputChange={handleEdit}
                    onEditFormSubmit={handleEditFormSubmit}
                />
            ) : (
                <AddForm todo={data} onAddInputChange={handleAddInputChange} onAddFormSubmit={handleAddFormSubmit} />
            )} 
            <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                { todos.map((todo) => (
                            <TodoItem todoItem={todo} onEditClick={handleEdit} key={todo.id}/>
                    ))
                }
            </List>
        </Container>
    )
}

export default App;
