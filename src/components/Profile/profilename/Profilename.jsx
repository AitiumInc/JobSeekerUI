import React, { useState } from 'react'
import { Grid, Dialog, styled } from '@mui/material';
import { Updateprofile, Feature } from '../../../components';

import './profilename.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Profilename = () => {
  const [email, setEmail] = useState('vkovoru@gmail.com');
  const [phone, setPhone] = useState('12345678');
  const [address, setAddress] = useState('hehehe');


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditEmail = (data) => {
    setEmail(data);
    handleClose();
  }
  const handleEditPhone = (data) => {
    setPhone(data);
    handleClose();
  }
  const handleEditAddress = (data) => {
    setAddress(data);
    handleClose();
  }

  const info = {
    email, phone, address
  }

  return (
    <React.Fragment>
      <Grid container sx = {{backgroundColor: 'white', padding: '30px 30px 30px 30px', marginBottom: '5vh',
                              display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'25px'}}>
        <Feature handleOpen={handleOpen} Title = "Details" plus = {false}/>
        <Grid item xs = {12} md = {12} sx={{width: '100%', diplay:'flex', padding: '20px'}}>
            Interested in AI, Software and Sports
        </Grid>
        <Grid item xs = {12} md = {12} className = "typo-body" spacing = {2} container sx={{padding: '20px', justifyContent:'flex-start'}}>
          <Grid className = "titles" item xs = {12} md = {2} sx = {{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <b>Email</b>
          </Grid>
          <Grid item xs = {12} md = {4} sx = {{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            {email}
          </Grid>
          <Grid item xs = {12} md = {2} sx = {{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <b>Phone</b>
          </Grid>
          <Grid item xs = {12} md = {4} sx = {{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            {phone}
          </Grid>
          <Grid item md = {2} sx = {{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <b>Address</b>
          </Grid>
          <Grid item md = {3}>
            {address}
          </Grid>
          <Grid item md = {2}>
            
          </Grid>
          <Grid item md = {3}>
            
          </Grid>
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Updateprofile handleClose = {handleClose} handleEditEmail = {handleEditEmail} handleEditAddress = {handleEditAddress} handleEditPhone = {handleEditPhone} info = {info}/>
      </BootstrapDialog>
    </React.Fragment>
  )
}

export default Profilename