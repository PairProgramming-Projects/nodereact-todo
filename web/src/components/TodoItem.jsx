/* eslint-disable react/prop-types */
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import CommentIcon from '@mui/icons-material/Comment';

const TodoItem = ( { todoItem, getTodos, isEditing, setCurrentTodo, checked, handleToggle } ) => {
    const deleteTodo = async(id)=>{
        try {
          const deleteResponse = await axios.delete(`http://localhost:8000/todos/${id}`)
          console.log(deleteResponse)
          
          if(deleteResponse.status === 204){
            getTodos()
          }
        } catch (error) {
          console.log(error)
        }
      }

    const handleEditClick = (todo) => {
        isEditing(true);
        setCurrentTodo({ ...todo });
    }

    return (
        <ListItem
            key={todoItem.id}
            sx={{ backgroundColor: '#eeeeee', borderRadius: '12px', margin: '5px', paddingRight: '15px', maxWidth: 'md' }}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon color="primary"/>
            //   </IconButton>
            // }
            disablePadding
        >
            <ListItemButton role={undefined} dense> 
            <ListItemIcon>
                <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    edge="start"
                    checked={checked.indexOf(todoItem.id) !== -1}
                    tabIndex={-1}
                    inputProps={{ 'aria-labelledby': todoItem.id }}
                    onChange={handleToggle(todoItem.id)}
                />
            </ListItemIcon>
            <ListItemText id={todoItem.id} primary={todoItem.title} />
        </ListItemButton>
            <Tooltip title="Edit">
                <IconButton aria-label="edit todo" onClick={() => handleEditClick(todoItem)}>
                    <EditIcon color="primary" /> 
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
            <IconButton edge="end" aria-label="delete" color='primary' onClick={()=>deleteTodo(todoItem.id)}>
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        </ListItem>
    )
}

export default TodoItem;