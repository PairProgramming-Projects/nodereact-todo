import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
// import { Controller, useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import TodoList from './components/TodoList'; 
import './App.css';

const App = () => {
    const userEmail = 'example@email.com'
    const [todos, setTodos] = useState([]);
    // const [inputValue, setInputValue] = useState('');
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
        const { value } = e.target
            setData((data) => ({
                ...data, title: value
            }))
            console.log(data)
        };

      const handleSubmit = async (e) => {
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
          setData( { title: '' } )
          console.log('response:', response)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => getTodos, [])

    //   const defaultValues = todos ? {
    //     ...todo,
    //   } : undefined;
    //   const {
    //     handleSubmit,
    //     setError,
    //     control,
    //     formState: { errors, isSubmitting },
    //   } = useForm({
    //     resolver: yupResolver(validationSchema),
    //     defaultValues,
    //   });

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
                <TextField required id="standard" label="Task" variant="standard" value={data.title ? data.title : ''} onChange={handleChange} />
                <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo" onClick={handleSubmit}>
                Add
                </Button>
            </Box>
            <TodoList allTodos={todos} />

        </Container>
    )
}

export default App;
