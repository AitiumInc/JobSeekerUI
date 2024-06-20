import React from 'react'
import { Grid, Typography, Divider, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const Feature = ({handleOpen, Title, plus}) => {

    return(
    <React.Fragment>
        <Grid container item xs = {12} md = {12} sx = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Grid item xs = {6} md={10} sx = {{display: 'flex', justifyContent:'flex-start'}}>
            <Typography variant='h4' sx={{
            fontFamily: 'Rubik, sans-serif', color: 'black',}}>{Title}</Typography>
          </Grid>
          <Grid item xs = {6} md={1} sx = {{display: 'flex', justifyContent:'flex-end', paddingRight:{md:'20px', xs:'10px'}}}>
            {plus ? 
            <Fab color="primary" aria-label="add"><AddIcon size="small"  onClick={handleOpen}/></Fab>
            :
            <Fab color="primary" aria-label="add"><EditIcon size="medium" onClick={handleOpen}/></Fab>}
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ width: '70vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
    </React.Fragment>
    )
}

export default Feature