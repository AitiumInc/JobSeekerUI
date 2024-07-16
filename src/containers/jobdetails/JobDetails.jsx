import React, { useState, useEffect } from 'react'
import { Header } from '../../containers';
import { Grid, Paper } from '@mui/material';
import { Joboverview } from '../../components';

const JobDetails = () => {
  const [selectedJob, setSelectedJob] = useState({})

  return (
    <React.Fragment>
        <Header props={{"otherTitle":true, "title": selectedJob}}/>
        <Grid spacing = {3} container sx = {{alignItems: 'center', padding: '10vh', backgroundColor:'#f5f7fa',}}>
          <Grid item xs = {12}>
            <Joboverview/>
          </Grid>
          <Grid item xs = {12}>
            Job Details
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default JobDetails