import React from 'react'
import { Stack, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Stack sx = {{flexDirection: 'column',
    position: 'absolute',
    margin: '15px',
    right: '45px',
    zIndex: 1000}}>
        <Typography sx={{color: '#FFFF'}}>Home</Typography>
        <Typography sx={{color: '#FFFF'}}>Browse Job</Typography>
        <Typography sx={{color: '#FFFF'}}>Pages</Typography>
        <Typography sx={{color: '#FFFF'}}>Blog</Typography>
        <Typography sx={{color: '#FFFF'}}>Contact</Typography>
    </Stack>
  )
}

export default Menu