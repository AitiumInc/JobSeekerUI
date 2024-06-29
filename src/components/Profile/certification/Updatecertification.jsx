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
    return `${year}-${month}-01`; // Adjust format as needed
};

const UpdateCertification = ({ handleClose, handleAddCertification }) => {
    const [certificate, setCertificate] = useState('');
    const [dateObtained, setDateObtained] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleSubmit = () => {
        const newCertification = {
            ProfessionalCertificate: certificate,
            ProfessionalCertificateDateObtained: convertToDate(dateObtained),
            ProfessionalCertificateExpirationDate: convertToDate(expirationDate),
            FK_JobseekerID: 1, // Replace with your actual logic for Jobseeker ID
        };

        fetch(`${dbUrl}AddJobseekerCertificate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCertification),
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                handleAddCertification(certificate, formatDate(dateObtained), formatDate(expirationDate));
            }
        })
        .catch(error => console.error(error));

        handleClose();
    };

    const handleDateObtainedChange = (date) => {
        setDateObtained(date);
    };

    const handleExpirationDateChange = (date) => {
        setExpirationDate(date);
    };

    return (
        <React.Fragment>
            <DialogContent dividers>
                Certificate
                <TextField
                    autoFocus
                    margin="dense"
                    label="Certificate"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={certificate}
                    onChange={(e) => setCertificate(e.target.value)}
                />
                Date Obtained
                <div className="datepicker-container">
                    <label className="datepicker-label">Date Obtained</label>
                    <DatePicker
                        selected={dateObtained}
                        onChange={handleDateObtainedChange}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        className="form-control"
                    />
                </div>
                Expiration Date
                <div className="datepicker-container">
                    <label className="datepicker-label">Expiration Date</label>
                    <DatePicker
                        selected={expirationDate}
                        onChange={handleExpirationDateChange}
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

export default UpdateCertification;
