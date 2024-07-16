import React from 'react'
import { Grid, Stack, Box, Button } from '@mui/material';
import { logo } from './imports'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Menu } from '../../components';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Grid container 
        alignItems = 'center'
        sx={{ flexDirection: { sx: "column", md: "row" },
        height : '10vh' }}>
      <Grid padding = '10px' item xs = {6} md = {3}>
        <Box>
          <img src = {logo} alt='logo'>
          </img>
        </Box>
      </Grid>
      <Grid padding  = '10px' item md = {6} alignItems = 'center' sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}>
        <Box>
          <Stack sx={{ flexDirection: { sx: "column", md: "row" },
                        '& > p > a': { margin: '20px',
                        color: 'white',
                        textDecoration: 'none', },
                        justifyContent: 'center',
                        '@media (max-width: 960px)': {
                          '& > p > a': {
                            fontSize: '0.8rem', // Font size for screens smaller than md (960px)
                          },
                        },}}>
            <p><a href='#home'>Home</a></p>
            <p><a href='#about'>Browse Jobs</a></p>
            <p><a href='#projects'>Pages</a></p>
            <p><a href='#achievements'>Blog</a></p>
            <p><a href='#contactme'>Contact</a></p>
          </Stack>
        </Box>
      </Grid>
      <Grid container item xs = {6} md = {3} color = 'green'
            sx={{ display: {md: 'flex'}, justifyContent: 'flex-end', padding: '10px' }}>
        <Button sx = {{color : 'white', display: {xs:'None', md:'block'}}}>Login</Button>
        <Button variant="contained" sx = {{color: 'white', backgroundColor: '#05D363', display: {xs:'None', md:'block'}}}>Post a Job</Button>
        <Box sx = {{display: {xs:'flex', md: 'None'}}}>
          {toggleMenu
            ? <RiCloseLine color = '#fff' size = {27} onClick = {() => setToggleMenu(false)}/>
            : <RiMenu3Line color = '#fff' size = {27} onClick = {() => setToggleMenu(true)}/>
          }
          {toggleMenu && 
            <Menu/>
          }
        </Box>
      </Grid>
    </Grid>
  )
}

export default Navbar
