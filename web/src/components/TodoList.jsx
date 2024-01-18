/* eslint-disable react/prop-types */
// import { useState } from 'react';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Checkbox from '@mui/material/Checkbox';
// import CommentIcon from '@mui/icons-material/Comment';
import axios from 'axios'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ( { allTodos, getTodos }) => {
    // toggle probably not needed until there is a delete all feature
//   const [checked, setChecked] = useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }
//     setChecked(newChecked);
//   };

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
    <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
      {allTodos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              // <IconButton edge="end" aria-label="comments">
              //   {/* to be replaced by an edit and delete icons */}
              //   <CommentIcon color="primary"/>
              // </IconButton>
              <IconButton edge="end" aria-label="delete" color='secondary'onClick={()=>deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            {/* <ListItemButton role={undefined} onClick={handleToggle(todo)} dense> */}
            <ListItemButton role={undefined}>
              {/* <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todo) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon> */}
              <ListItemText id={labelId} primary={todo.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TodoList;