/* eslint-disable react/prop-types */
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import CommentIcon from '@mui/icons-material/Comment';

const TodoItem = ( { todoItem, onEditClick } ) => {
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