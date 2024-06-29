import React, { useState } from 'react';
import { 
    Typography,
    TextField,
    Grid,
    DialogTitle, 
    DialogContent,
    DialogActions,
    IconButton,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material';
import { IoIosCloseCircle } from "react-icons/io";
import { statesList, dbUrl } from '../../../utils/constants';

const Updateprofile = ({ handleClose, handleEditEmail, handleEditAddress, handleEditPhone, handleEditType, handleEditState, info, editData }) => {
    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const [address, setAddress] = useState(info.address);
    const [searchType, setSearchType] = useState(info.searchType);
    const [state, setState] = useState(info.state);
    const [response, setResponse] = useState({});
    const data = editData;

    const handleEmailChange = (event) => {
        if(event.target.value !== ""){
            setEmail(event.target.value);
            editData.JobseekerEmail = event.target.value;
            setResponse(editData);
        }
    };

    const handlePhoneChange = (event) => {
        if(event.target.value !== ""){
            setPhone(event.target.value);
            editData.JobseekerPhoneNumber = event.target.value
            setResponse(editData);
        }
    };

    const handleAddressChange = (event) => {
        if(event.target.value !== ""){
            setAddress(event.target.value);
            editData.JobseekerAddress = event.target.value;
            setResponse(editData);
        }
    };

    const handleSearchTypeChange = (event) => {
        if(event.target.value !== ""){
            setSearchType(event.target.value);
        }
    };

    const handleStateChange = (event) => {
        if(event.target.value !== ""){
            setState(event.target.value);
            editData.JobseekerState = event.target.value
            setResponse(editData);
        }
    };

    const sendPostRequest = async (response) => {
        const url = `${dbUrl}UpdateJobseeker`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(response),
        };
      
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const data = await res.json();
          console.log('Response:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const handleEdit = () => {
        console.log(JSON.stringify(response),"print");
        sendPostRequest(response);
        // handleEditEmail(email);
        // handleEditAddress(address);
        // handleEditPhone(phone);
        // handleEditType(searchType);
        // handleEditState(state);
        handleClose();
    };

    return (
        <React.Fragment>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Update Profile
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <IoIosCloseCircle />
            </IconButton>
            <DialogContent dividers>
                <Typography>
                    Make changes and make sure to click save
                </Typography>
                <Grid container sx={{ padding: '0.4rem' }} spacing={4}>
                    <Grid container item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            defaultValue={email}
                            variant="standard"
                            onChange={handleEmailChange}
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: '18px',
                                    lineHeight: '3',
                                }
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            id="phone"
                            label="Phone"
                            defaultValue={phone}
                            variant="standard"
                            onChange={handlePhoneChange}
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: '18px',
                                    lineHeight: '3',
                                }
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            id="address"
                            label="Address"
                            defaultValue={address}
                            variant="standard"
                            onChange={handleAddressChange}
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: '18px',
                                    lineHeight: '3',
                                }
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                            <InputLabel id="search-type-label">Search Type</InputLabel>
                            <Select
                                labelId="search-type-label"
                                id="search-type"
                                value={searchType}
                                onChange={handleSearchTypeChange}
                                label="Search Type"
                            >
                                <MenuItem value={'Full-time'}>Full-time</MenuItem>
                                <MenuItem value={'Part-time'}>Part-time</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container item xs={12}>
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                                labelId="state-label"
                                id="state"
                                value={state}
                                onChange={handleStateChange}
                                label="State"
                            >
                                {statesList.map((state) => (
                                    <MenuItem key={state.value} value={state.value}>
                                        {state.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleEdit}>
                    Save changes
                </Button>
            </DialogActions>
        </React.Fragment>
    );
};

export default Updateprofile;