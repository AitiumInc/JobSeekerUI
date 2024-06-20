import React, { useState, useEffect } from 'react';
import { DialogContent, DialogActions, Button, TextField } from '@mui/material';
// import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';

const Updateexperiences = ({ handleClose, handleAddExperience }) => {
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
      
    useEffect( () => {
    
    })   

    const handleSubmit = () => {
        handleAddExperience(role, description, startYear, endYear);
        handleClose();
    };
           

    return (
        <React.Fragment>
            <DialogContent dividers>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Role"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* <Datetime dateFormat="YYYY" onChange={(e) => setStartYear(e.target.value)}/>
                <Datetime dateFormat="YYYY" onChange={(e) => setEndYear(e.target.value)}/> */}
                <TextField
                    margin="dense"
                    label="Start Year"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="End Year"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Add
                </Button>
            </DialogActions>
        </React.Fragment>
    );
};

export default Updateexperiences;
