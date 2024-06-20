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
    Slider
} from '@mui/material';
import { IoIosCloseCircle } from "react-icons/io";

const Updateskills = ({ handleClose, skills, handleAllSkillChange, handleAddSkill }) => {
    const [skill, setSkill] = useState(skills[0]);
    const [yoe, setYoe] = useState();

    const handleSkillChange = (event) => {
        setSkill(event.target.value);
    };

    const handleYoeChange = (event) => {
        setYoe(event.target.value);
    };

    const handleEdit = () => {
        // console.log(skill, yoe);
        handleAllSkillChange();
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
                        id="standard-select-skills-native"
                        select
                        label="Select skill"
                        defaultValue=""
                        onChange={handleSkillChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your skill"
                        variant="standard"
                    >
                        {skills.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs = {12}>
                    <Slider 
                        size="small"
                        aria-label="small"
                        onChange={handleYoeChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={40}
                        style = {{width: '70%'}}
                    />
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
