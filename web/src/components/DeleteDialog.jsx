/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteAllDialog = ( { open, setOpen, getTodos, selectedItems, setSelectedItems } ) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAll = async (selectedItems) => {
    const itemsToDelete = { items: selectedItems };
    try {
      const deleteResponse = await axios.delete(`http://localhost:8000/todos/`, itemsToDelete)
      
      if(deleteResponse.status === 204){
        getTodos();
        setOpen(false);
        setSelectedItems([]);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to delete all selected items?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This will delete all selected items from your data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteAll(selectedItems)}>Yes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteAllDialog;