import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import TodoList from './components/TodoList'; 
import './App.css';

const App = () => {
    // const todos = ['Do laundry', 'Call dentist', 'Take down Christmas decorations'];
    const userEmail = 'example@email.com'
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState({
        user_email:  'example@email.com',
        title: '',
        progress: 0,
        date: new Date(),
      })
    const getTodos = async () => {
        try {
          const response = (
            await axios.get(`http://localhost:8000/todos/${userEmail}`)
          ).data
          console.log('response:', response)
          setTodos(response)
          
        } catch (err) {
          console.log(err)
        }
      }

      const handleChange = (e) => {
        const {value } = e.target
            setData((data) => ({
                ...data, title:value
            }))
            console.log(data)
        };

      const postData = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:8000/todos/create', {
            data: data,
          },{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          getTodos()
          console.log('response:', response)
        } catch (error) {
          console.log(error)
        }
      }
    

      useEffect(() => getTodos, [])


    // const [fetchTodosError, setFetchTodosError] = useState(null);
    // const [saveTodoError, setSaveTodoError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     //   try {
    //         const { data } = await axios.get(`${process.env.BASE_API}/api/Todos/All`);
    //         setTodos(data);
    //     //   } catch (err) {
    //     //     setFetchRecipesError(err);
    //     //   }
    //     //   setLoadingState(false);
    //     };
    //     fetchData();
    //   }, []);

    return (
        <Container maxWidth="xl">
            <h1>TODO</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField required id="standard" label="Task" variant="standard" value={data.title} onChange={handleChange} />
                <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo" onClick={postData}>
                Add
                </Button>
            </Box>
            <TodoList allTodos={todos} getTodos={getTodos} />

        </Container>
    )
}

export default App;
