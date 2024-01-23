/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';

const Note = ( { count } ) => {
  return (
        <Typography variant='body1'>
            No. of items to be completed: {count}
        </Typography>
  )
}

export default Note;