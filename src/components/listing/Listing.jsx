import React from 'react'
import { Avatar, Box, Grid, Typography, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';

const commonStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: '1rem', 
    color: 'text.primary', 
    padding: '5px'
  };

const iconStyles = {
    paddingLeft:'20px'
}

const Listing = ({info}) => {
  return (
    <Box sx={{border:'2px solid lightblue', margin:'10px 0px', width:'100%', padding:'20px 20px', borderRadius:'10px'}}>
        <Stack sx={{flexDirection:'row'}}>
            <Grid sx={{margin:'2vh 2vh'}}>
                <Avatar alt="Check Sharp" src="/static/images/avatar/1.jpg" sx={{width:'80px', height:'80px', borderRadius:'10px'}}/>
            </Grid>
            <Grid>
                <Stack sx={{flexDirection:'column'}}>
                    <Typography variant="h5" sx={{color:'purple'}}>{info.JobRole}</Typography>
                    <Typography sx={{ ...commonStyles }}>
                        <BusinessIcon fontSize='small'/>
                        {info.Company} 
                        <LocationOnIcon fontSize='small' sx={{...iconStyles}}/>
                        {info.Location}
                    </Typography>
                    <Typography sx={{ ...commonStyles }}>
                        <WorkIcon fontSize='small' />{info.JobType} <ScheduleIcon fontSize='small' sx={{...iconStyles}}/>Date Posted {info.DatePosted}
                    </Typography>
                    <Typography>{info.ShortDescription}</Typography>
                </Stack>
            </Grid>
        </Stack>
    </Box>
  )
}

export default Listing