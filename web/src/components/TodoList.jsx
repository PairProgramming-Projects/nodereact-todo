/* eslint-disable react/prop-types */
// import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';

const TodoList = ( { allTodos }) => {
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

  return (
    <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
      {allTodos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {/* to be replaced by an edit and delete icons */}
                <EditIcon color="primary"></EditIcon>
                <CommentIcon color="primary"/>
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