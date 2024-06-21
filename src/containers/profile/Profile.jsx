import React from 'react'
import { Grid, Stack } from '@mui/material';
import { Profilename, Skills, Experiences } from '../../components';

const Profile = () => {

  return (
    <Grid container spacing = {2} sx = {{display: 'flex', 
                            justifyContent: 'center', 
                            backgroundColor:'#f5f7fa',
                            padding: {xs:'5vh 10vw 5vh 10vw', md:'10vh 10vw 10vh 10vw'},
                            fontSize: '1.2rem'
                            }}>
      <Stack sx = {{flexDirection: 'column'}}>
        <Profilename/>
        <Skills/>
        <Experiences/>
      </Stack>
    </Grid>
  )
}

export default Profile