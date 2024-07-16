import React from 'react'
import { Typography, Grid, Stack, Divider } from '@mui/material';
import { Sidebar, Postings } from '../../components';
import { Header } from '../../containers';

const headerDetails = {
  "title":"Jobs",
  "badge":false
}

const Feed = () => {
  return (
    <React.Fragment>
      <Header props={{"otherTitle":true, "title":headerDetails}}/>
      <Stack sx = {{flexDirection: {xs: "column", md: "row"}, margin:{md:"00vh 20vh"}}}>
        <Sidebar/>
        <Divider orientation="vertical" variant="middle" flexItem sx={{margin:'5vh 2vh'}} />
        <Postings/>
      </Stack>
    </React.Fragment>
  )
}

export default Feed