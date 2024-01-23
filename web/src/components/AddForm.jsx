/* eslint-disable react/prop-types */

import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddForm = ( { getTodos } ) => {
    const [data, setData] = useState({
        user_email:  'example@email.com',
        title: '',
        progress: 0,
        date: new Date(),
      });

    const handleAddInputChange = (e) => {
        const { value } = e.target
        setData((data) => ({
        ...data, title: value
        }))
        console.log(data)
    };

        
    const handleAddFormSubmit = async (e) => {
        e.preventDefault()
        try {
            if( data.title !== '') {
                const response = await axios.post('http://localhost:8000/todos/create', {
                    data: data,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                getTodos()
                setData( { title: '' } )
                console.log('add form submit response:', response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="standard"
                label="Task"
                variant="standard"
                value={data.title ? data.title : ''}
                fullwidth="true"
                onChange={handleAddInputChange}
            />
            <Button
                variant='contained'
                color='secondary'
                aria-label='add todo'
                onClick={handleAddFormSubmit}
                sx={{ maxWidth: 100 }}
            >
                Add
            </Button>
        </Box>
    )
};

export default AddForm;