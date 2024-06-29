import React, { useState } from 'react';
import { DialogContent, DialogActions, Button, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../feature/DatePicker.css';
import { dbUrl } from '../../../utils/constants';

const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "";
    }
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}/${year}`;
};

const convertToDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return "";
    }
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-01`;
};

const Updateexperiences = ({ handleClose, handleAddExperience, handleSuccess }) => {
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSubmit = () => {
        const newExperience = {
            ExperiencesRoleName: role,
            ExperiencesRoleDescription: description,
            ExperiencesStartDate: convertToDate(startDate),
            ExperiencesEndDate: convertToDate(endDate),
            FK_JobseekerID: 1,
        };

        fetch(`${dbUrl}AddJobseekerExperience`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExperience),
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                handleAddExperience(role, description, formatDate(startDate), formatDate(endDate));
                handleSuccess();
            }
        })
        .catch(error => console.error(error));

        handleClose();
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
                    rows={4}
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
