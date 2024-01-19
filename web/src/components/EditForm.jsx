/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditForm = ( {
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
    } ) => {
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="standard"
                    label="Task"
                    variant="standard"
                    value={currentTodo.title ? currentTodo.title : ''}
                    onChange={onEditInputChange}
                />
                <Button variant="outlined" color="primary" aria-label="add todo" onClick={onEditFormSubmit}>
                    Update
                </Button>
                <Button variant="outlined" color="primary" aria-label="add todo" onClick={ () => setIsEditing(false) }>
                    Cancel
                </Button>
            </Box>
        )
}

export default EditForm;