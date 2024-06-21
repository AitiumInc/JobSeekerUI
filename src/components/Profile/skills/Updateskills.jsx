import React, { useState } from 'react';
import { 
    Typography,
    TextField,
    Grid,
    DialogTitle, 
    DialogContent,
    DialogActions,
    IconButton,
    Button,
    Slider,
    FormControl, FormLabel, FormHelperText
} from '@mui/material';
import { IoIosCloseCircle } from "react-icons/io";

const Updateskills = ({ handleClose, handleAddSkill }) => {
    const [skill, setSkill] = useState();
    const [yoe, setYoe] = useState(0);

    const handleSkillChange = (event) => {
            setSkill(event.target.value);
    };

    const handleYoeChange = (event) => {
        setYoe(event.target.value);
    };

    const handleEdit = () => {
        // console.log(skill, yoe);
        handleAddSkill(skill, yoe);
        handleClose();
    };

  return (
    <React.Fragment>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Update Skills
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
        >
            <IoIosCloseCircle />
        </IconButton>
        <DialogContent dividers>
            <Typography>
            Add more skills and years of experience. Click save
            </Typography>
            <Grid container sx={{ padding: '0.4rem' }} spacing={4}>
                <Grid container item xs={12}>
                    <TextField
                        id="standard-skills"
                        label="Enter skill"
                        defaultValue=""
                        onChange={handleSkillChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please enter your skill"
                        variant="standard"
                    >
                    </TextField>
                </Grid>
                <Grid item xs = {12}>
                <FormControl component="fieldset" style={{ width: '70%' }}>
                    <FormLabel component="legend">Years of Experience</FormLabel>
                    <Slider
                        size="small"
                        aria-label="Years of Experience"
                        onChange={handleYoeChange}
                        value={yoe}
                        valueLabelDisplay="auto"
                        min={0}
                        max={40}
                        style={{ width: '100%' }}
                    />
                    <FormHelperText>{yoe} years</FormHelperText>
                </FormControl>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleEdit}>
                Save changes
            </Button>
        </DialogActions>
    </React.Fragment>
  );
}

export default Updateskills;
