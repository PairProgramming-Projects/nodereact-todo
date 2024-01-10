// import { useState, useEffect } from 'react';
// import axios from 'axios';
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
    const todos = ['Do laundry', 'Call dentist', 'Take down Christmas decorations'];
    // const [todos, setTodos] = useState([]);
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
                <TextField required id="standard" label="Task" variant="standard" />
                <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo">
                Add
                </Button>
            </Box>
            <TodoList allTodos={todos} />

        </Container>
    )
}

export default App;
