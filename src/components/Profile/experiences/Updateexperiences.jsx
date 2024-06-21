import React, { useState } from 'react';
import { DialogContent, DialogActions, Button, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "";
    }
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

const Updateexperiences = ({ handleClose, handleAddExperience }) => {
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(''); // State for start date
    const [endDate, setEndDate] = useState(''); // State for end date
      
    const handleSubmit = () => {
        handleAddExperience(role, description, formatDate(startDate), formatDate(endDate));
        handleClose();
    };

    const handleStartDateChange = (date) => {
        setStartDate(date); // Update startDate state
      };
    
      const handleEndDateChange = (date) => {
        setEndDate(date); // Update endDate state
      };
           
    return (
        <React.Fragment>
            <DialogContent dividers>
                Role
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
                Description
                <TextField
                    margin="dense"
                    label="Description"
                    multiline
                    rows={4} // Adjust the number of rows as needed
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                Start Date
                <div className="datepicker-container">
                    <label className="datepicker-label">Start Date</label>
                    <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    className="form-control"
                    />
                </div>
                End Date
                <div className="datepicker-container">
                    <label className="datepicker-label">End Date</label>
                    <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    className="form-control"
                    />
                </div>
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
