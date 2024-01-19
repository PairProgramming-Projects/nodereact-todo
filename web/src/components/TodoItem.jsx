/* eslint-disable react/prop-types */
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

// import ListItemIcon from '@mui/material/ListItemIcon';
// import CommentIcon from '@mui/icons-material/Comment';

const TodoItem = ( { todoItem, onEditClick, getTodos } ) => {

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
    return (
        <ListItem
            key={todoItem.id}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon color="primary"/>
            //   </IconButton>
            // }
            disablePadding
            >
                <ListItemButton role={undefined}>
                    <ListItemText id={todoItem.id} primary={todoItem.title} />
                </ListItemButton>
                <Tooltip title="Edit">
                    <IconButton aria-label="edit todo" onClick={() => onEditClick(todoItem)}>
                        <EditIcon color="primary" /> 
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                <IconButton edge="end" aria-label="delete" color='secondary'onClick={()=>deleteTodo(todoItem.id)}>
                    <DeleteIcon />
                </IconButton>
                </Tooltip>
                {/* For the delete functionality
                <Tooltip title="Delete">
                    <IconButton aria-label="delete todo" onClick={() => handleEditTodo(todo)}>
                        <EditIcon color="primary" /> 
                    </IconButton>
                </Tooltip> */}
        </ListItem>
    )
}

export default TodoItem;