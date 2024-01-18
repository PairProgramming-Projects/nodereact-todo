/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddForm = ( { todo, onAddInputChange, onAddFormSubmit } ) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField required id="standard" label="Task" variant="standard" value={todo.title ? todo.title : ''} onChange={onAddInputChange} />
            <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo" onClick={onAddFormSubmit}>
            Add
            </Button>
        </Box>
    )
};

export default AddForm;