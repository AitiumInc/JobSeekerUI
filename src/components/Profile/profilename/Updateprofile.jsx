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
import { statesList } from '../../../utils/constants';

const Updateprofile = ({ handleClose, handleEditEmail, handleEditAddress, handleEditPhone, handleEditType, handleEditState, info }) => {
    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const [address, setAddress] = useState(info.address);
    const [searchType, setSearchType] = useState(info.searchType);
    const [state, setState] = useState(info.state);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleEdit = () => {
        handleEditEmail(email);
        handleEditAddress(address);
        handleEditPhone(phone);
        handleEditType(searchType);
        handleEditState(state);
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
                            required
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
                            required
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
                            required
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