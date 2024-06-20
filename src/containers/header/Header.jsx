import React from 'react'
import { Grid } from '@mui/material';
import { Navbar, Title } from '../../components';
import { banner } from './imports';

const Header = () => {
  return (
    <Grid sx = {{backgroundImage: `url(${banner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '20px'}}>
        <Navbar/>
        <Title/>
    </Grid>
  )
}

export default Header