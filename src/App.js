import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Feed, JobDetails, Profile } from './containers';

import React from 'react'

export const App = () => {
  return (
    <BrowserRouter>
        <Box>
          <Stack sx = {{flexDirection: 'column'}}>
              <Routes>
                  <Route path="/" />;
                  <Route path="/profile" element={<Profile/>}/>;
                  <Route path='/jobs' element={<Feed/>}/>;
                  <Route path="/jobs/1" element={<JobDetails/>}/>;
              </Routes>
            </Stack>
        </Box>
    </BrowserRouter>
  )
}


export default App;