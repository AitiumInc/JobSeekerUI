import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Feed, Profile, Header } from './containers';

import React from 'react'

export const App = () => {
  return (
    <BrowserRouter>
        <Box>
          <Stack sx = {{flexDirection: 'column'}}>
            <Header/>
              <Routes>
                  <Route path="/" exact element={<Feed/>}/>;
                  <Route path="/profile" element={<Profile/>}/>;
              </Routes>
            </Stack>
        </Box>
    </BrowserRouter>
  )
}


export default App;
