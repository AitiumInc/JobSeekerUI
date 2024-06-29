import React, { useState } from 'react';
import { DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../feature/DatePicker.css';
import { dbUrl, degreeOptions } from '../../../utils/constants';

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

const UpdateEducation = ({ handleClose, handleAddEducation }) => {
    const [educationName, setEducationName] = useState('');
    const [highestDegree, setHighestDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSubmit = () => {
        const newEducation = {
            EDInstitutionName: educationName,
            EDHighestDegree: highestDegree,
            EDStartingDate: convertToDate(startDate),
            EDEndingDate: convertToDate(endDate),
            FK_JobseekerID: 1, // Replace with your actual Jobseeker ID logic
        };

        fetch(`${dbUrl}AddJobseekerEducation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEducation),
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                handleAddEducation(educationName, highestDegree, formatDate(startDate), formatDate(endDate));
            }
        })
        .catch(error => console.error(error));

        handleClose();
    };

    return (
        <React.Fragment>
            <DialogContent dividers>
                Education Name
                <TextField
                    autoFocus
                    margin="dense"
                    label="Education Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={educationName}
                    onChange={(e) => setEducationName(e.target.value)}
                />
                Highest Degree
                <FormControl fullWidth variant="outlined" margin="dense">
                    <InputLabel id="highest-degree-label">Highest Degree</InputLabel>
                    <Select
                        labelId="highest-degree-label"
                        value={highestDegree}
                        onChange={(e) => setHighestDegree(e.target.value)}
                        label="Highest Degree"
                    >
                        {degreeOptions.map((degree) => (
                            <MenuItem key={degree} value={degree}>
                                {degree}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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

export default UpdateEducation;
