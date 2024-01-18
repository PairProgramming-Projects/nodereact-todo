import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

const EditForm = ( {
    // still need the currentTodo 
    currentTodo,
    // also need to be able to toggle setIsEditing
    setIsEditing,
    // notice the name change of the function handleEditInputChange to onEditInputChange
    onEditInputChange,
    // notice the name change of the function handleEditFormSubmit to onEditFormSubmit
    onEditFormSubmit
    } ) => {
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>Edit Todo</Typography>
            <TextField required id="standard" label="Task" variant="standard" value={currentTodo.title ? currentTodo.title : ''} onChange={onEditInputChange} />
            <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo" onClick={onEditFormSubmit}>
                Update
            </Button>
            <Button variant="outlined" startIcon={<AddIcon />} color="primary" aria-label="add todo" onClick={ () => setIsEditing(false) }>
                Cancel
            </Button>
        </Box>
}

export default EditForm;