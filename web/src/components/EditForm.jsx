/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const EditForm = ( {
        currentTodo,
        getTodos,
        setIsEditing,
        setCurrentTodo
    } ) => {
        const handleEditInputChange = (e) => {
            setCurrentTodo({ ...currentTodo, title: e.target.value });
        }

        const handleTodoUpdate = async (id, todoToUpdate) => {
            const request = { ...todoToUpdate, userEmail: 'example@email.com' };
            await axios.put(`http://localhost:8000/todos/update/${id}`, request);
            setIsEditing(false);
            getTodos();
        }
    
        const handleEditFormSubmit = (e) => {
            e.preventDefault();
            handleTodoUpdate(currentTodo.id, currentTodo);
        }
    
        return (
            <Box
                component="form"
                // sx={{
                //     '& > :not(style)': { m: 1, width: '50ch' },
                // }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="standard"
                    label="Task"
                    variant="standard"
                    value={currentTodo.title ? currentTodo.title : ''}
                    onChange={handleEditInputChange}
                    sx={{
                        m: 1, width: '50ch'
                    }}
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    aria-label="add todo"
                    onClick={handleEditFormSubmit}
                    sx={{ width: '100px', marginRight: 1 }} 
                >
                    Update
                </Button>
                <Button variant="outlined" color="primary" aria-label="add todo" sx={{ width: '100px'}} onClick={ () => setIsEditing(false) }>
                    Cancel
                </Button>
            </Box>
        )
}

export default EditForm;