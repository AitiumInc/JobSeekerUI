import React, { useEffect } from 'react'
import { Grid, Typography, Avatar, Badge } from '@mui/material';
import { illustration } from './imports';

const Title = ({info}) => {

  useEffect(() => {
  }, []);

  return (
    <Grid container spacing = {2} sx = {{height: {xs:'20vh', md:'25vh'}, flexDirection: 'row'}}>
        <Grid item xs = {4} md = {2} sx = {{display: 'flex',
                                    justifyContent:{md:'flex-end', xs: 'center'},
                                    alignItems: 'center'}}>
                {info.badge && <Avatar alt={`${info.title}`} src="/static/images/avatar/1.jpg" sx={{ width: 120, height: 120 }} />}
        </Grid>
        <Grid item xs = {8} md = {6} sx = {{display: 'flex',
                justifyContent: 'flex-start', // Center horizontally
                alignItems: 'center',
                maxHeight: '100%'}}>
        <Typography variant='h2' sx={{
        fontFamily: 'Rubik, sans-serif', color: 'white', fontSize: {xs:'2.5rem', md:'3rem'}}}>
            {info.title}
        </Typography>
        </Grid>
        <Grid item md = {4} sx = {{display: {xs: 'None', md:'flex'}, justifyContent: 'right',
                                  maxHeight: '100%'}}>
          <img src={illustration} alt='illustration' style={{
            maxHeight: '100%',
            width: 'auto'}}>
          </img>
        </Grid>
    </Grid>
  )
}

export default Title
