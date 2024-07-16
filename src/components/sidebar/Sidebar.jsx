import React from 'react'
import { Stack, Divider, Grid, Box, FormControlLabel, Checkbox } from '@mui/material'

const Sidebar = () => {
  return (
    <Stack sx = {{overflowY: 'auto', height:'auto', flexDirection:'column', minWidth: '20vw'}} >
        <React.Fragment>
            <Grid sx={{flexDirection:'column'}}>
                <h2>Filters</h2>
                <Divider variant="middle" sx={{ width: '15vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
                <Box sx = {{textAlign:'flex-start', alignItems:'center'}}>
                    <b>Work settings</b>
                    <Box sx={{display: 'flex', flexDirection:'column'}}>
                        <FormControlLabel control={<Checkbox  />} label="Work from home" />
                        <FormControlLabel control={<Checkbox  />} label="Remote" />
                        <FormControlLabel control={<Checkbox  />} label="Hybrid" />
                    </Box>
                </Box>
                <Divider variant="middle" sx={{ width: '15vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
                <Box>
                    <b>Posted Date</b>
                    <Box sx={{display: 'flex', flexDirection:'column'}}>
                        <FormControlLabel control={<Checkbox  />} label="Any Date"/>
                        <FormControlLabel control={<Checkbox  />} label="Today"/>
                        <FormControlLabel control={<Checkbox  />} label="Last 3 days"/>
                        <FormControlLabel control={<Checkbox  />} label="Last 7 days"/>
                    </Box>
                </Box>
                <Divider variant="middle" sx={{ width: '15vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
                <Box>
                    <b>Employment Type</b>
                    <Box sx={{display: 'flex', flexDirection:'column'}}>
                        <FormControlLabel control={<Checkbox  />} label="Full-time"/>
                        <FormControlLabel control={<Checkbox  />} label="Part-time"/>
                        <FormControlLabel control={<Checkbox  />} label="Contract"/>
                        <FormControlLabel control={<Checkbox  />} label="Third Party"/>
                    </Box>
                </Box>
                <Divider variant="middle" sx={{ width: '15vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
                <Box>
                    <b>Work Authorization</b>
                    <Box sx={{display: 'flex', flexDirection:'column'}}>
                        <FormControlLabel control={<Checkbox  />} label="Willing to sponsor"/>
                    </Box>
                </Box>
                <Divider variant="middle" sx={{ width: '15vw', bgcolor: 'light-blue', margin: '20px 0px' }} />
                <Box>
                    <b>Employer type</b>
                    <Box sx={{display: 'flex', flexDirection:'column'}}>
                        <FormControlLabel control={<Checkbox  />} label="Direct hire"/>
                        <FormControlLabel control={<Checkbox  />} label="Recruiter"/>
                        <FormControlLabel control={<Checkbox  />} label="Other"/>
                    </Box>
                </Box>
            </Grid>
        </React.Fragment>
    </Stack>
  )
}

export default Sidebar