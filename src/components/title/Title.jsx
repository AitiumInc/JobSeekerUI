import React from 'react'
import { Grid, Typography, Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { illustration } from './imports';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      height: '15px',
      width: '15px',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Title = () => {
  return (
    <Grid container spacing = {2} sx = {{height: {xs:'20vh', md:'25vh'}, flexDirection: 'row'}}>
        <Grid item xs = {4} md = {2} sx = {{display: 'flex',
                                    justifyContent:{md:'flex-end', xs: 'center'},
                                    alignItems: 'center'}}>
            <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                <Avatar alt="Vishal" src="/static/images/avatar/1.jpg" sx = {{width: 120, height: 120}}/>
            </StyledBadge>

        </Grid>
        <Grid item xs = {8} md = {6}sx = {{display: 'flex',
                justifyContent: 'flex-start', // Center horizontally
                alignItems: 'center',
                maxHeight: '100%'}}>
        <Typography variant='h2' sx={{
        fontFamily: 'Rubik, sans-serif', color: 'white', fontSize: {xs:'2.5rem', md:'3rem'}}}>
            Vishal Varma
        </Typography>
        </Grid>
        <Grid item md = {4} sx = {{display: {xs: 'None', md:'flex'}, justifyContent: 'right',
                                  maxHeight: '100%'}}>
          <img src = {illustration} alt='illustration' style={{
            maxHeight: '100%',
            width: 'auto'}}>
            </img>
        </Grid>
    </Grid>
  )
}

export default Title