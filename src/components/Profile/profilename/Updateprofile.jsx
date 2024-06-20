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
    } from '@mui/material'
import { IoIosCloseCircle } from "react-icons/io";
const Updateprofile = ({handleClose, handleEditEmail, handleEditAddress, handleEditPhone, info}) => {

    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const [address, setAddress] = useState(info.address);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEdit = () => {
        handleEditEmail(email);
        handleEditAddress(address);
        handleEditPhone(phone);
        handleClose();
    }

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
            <Grid container sx = {{padding: '0.4rem'}} spacing = {4}>
                <Grid container item xs = {12}>
                    <TextField
                    required
                    id="standard-required"
                    label="required"
                    defaultValue={email}
                    variant="standard"
                    onChange={handleEmailChange}
                    sx={{
                        '& .MuiInputBase-root': { // Target root element
                          fontSize: '18px', // Adjust font size
                          lineHeight: '3', // Adjust line height
                        }}}
                    />
                </Grid>
                <Grid item xs = {12}>
                    <TextField
                    required
                    id="standard-required"
                    label="required"
                    defaultValue={phone}
                    variant="standard"
                    onChange={handlePhoneChange}
                    sx={{
                        '& .MuiInputBase-root': { // Target root element
                          fontSize: '18px', // Adjust font size
                          lineHeight: '8', // Adjust line height
                        },}}
                    />
                </Grid>
                <Grid item xs = {12}>
                    <TextField
                    required
                    id="standard-required"
                    label="required"
                    defaultValue={address}
                    variant="standard"
                    onChange={handleAddressChange}
                    sx={{
                        '& .MuiInputBase-root': { // Target root element
                          fontSize: '18px', // Adjust font size
                          lineHeight: '3', // Adjust line height
                        },}}
                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleEdit}>
                Save changes
            </Button>
        </DialogActions>
    </React.Fragment>
  )
}

export default Updateprofile