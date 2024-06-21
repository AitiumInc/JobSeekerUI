import React, { useEffect, useState } from 'react';
import { Grid, Dialog, styled, Divider } from '@mui/material';
import { Updateprofile, Feature } from '../../../components';
import { dbUrl, getoptions } from '../../../utils/constants';

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
  const [response, setResponse] = useState({});

  const [email, setEmail] = useState('vkovoru@gmail.com');
  const [phone, setPhone] = useState('12345678');
  const [address, setAddress] = useState('McCallum, TX');
  const [state, setState] = useState('TX');
  const [searchType, setSearchType] = useState('Full-time');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetch(dbUrl+'GetJobseekerByID?ID=1', getoptions)
      .then(response => response.json())
      .then(json => setResponse(json))
      .catch(error => console.error(error));
  }, [response]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditEmail = (data) => {
    setEmail(data);
    handleClose();
  };
  const handleEditPhone = (data) => {
    setPhone(data);
    handleClose();
  };
  const handleEditAddress = (data) => {
    setAddress(data);
    handleClose();
  };

  const handleEditType = (data) => {
    setSearchType(data);
    handleClose();
  };

  const handleEditState = (data) => {
    setState(data);
    handleClose();
  };

  const info = {
    email,
    phone,
    address,
    state,
    searchType
  };

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          backgroundColor: 'white',
          padding: '30px',
          marginBottom: '5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '25px',
        }}
      >
        <Feature handleOpen={handleOpen} Title="Details" plus={false} />
        <Grid item xs={12} md={12} sx={{ width: '100%', display: 'flex', padding: '20px' }}>
          Interested in AI, Software and Sports
        </Grid>
        <Grid container item xs={12} spacing={2} sx={{ padding: '20px', justifyContent: 'flex-start' }}>
          <Grid container item xs={12} md={4} spacing={2}>
            <Grid className="titles" item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <b>Email</b>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {response && response.JobseekerEmail ? response.JobseekerEmail : ""}
            </Grid>
            <Grid className="titles" item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <b>Phone</b>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {response && response.JobseekerPhoneNumber ? response.JobseekerPhoneNumber : ""}
            </Grid>
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: 'light-blue', margin: '20px 0px' }}
          />

          <Grid container item xs={12} md={4} spacing={2}>
            <Grid className="titles" item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <b>Address</b>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {response && response.JobseekerAddress ? response.JobseekerAddress : ""}
            </Grid>
            <Grid className="titles" item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <b>Location</b>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {response && response.JobseekerCity ? response.JobseekerCity : ""}
            </Grid>
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: 'light-blue', margin: '20px 0px' }}
          />

          <Grid container item xs={12} md={3} spacing={2}>
            <Grid className="titles" item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <b>Type</b>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {searchType}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Updateprofile
          handleClose={handleClose}
          handleEditEmail={handleEditEmail}
          handleEditAddress={handleEditAddress}
          handleEditPhone={handleEditPhone}
          handleEditState={handleEditState}
          handleEditType={handleEditType}
          info={info}
        />
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Profilename;
