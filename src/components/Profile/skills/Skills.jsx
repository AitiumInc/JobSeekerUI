import React, { useState, useEffect, useCallback } from 'react'
import { Grid, Dialog, styled, Table, TableBody, TableContainer, TablePagination, 
    TableCell, TableHead, Paper, TableRow, Button} from '@mui/material'
import { Feature, Updateskills } from '../../../components';
import { MdDeleteForever } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

const allSkills = [
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'sql', label: 'SQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'aws', label: 'AWS' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'git', label: 'Git' },
    { value: 'linux', label: 'Linux' },
    { value: 'machinelearning', label: 'Machine Learning' },
    { value: 'dataanalysis', label: 'Data Analysis' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'devops', label: 'DevOps' },
  ];

function createData(id, value, skill, yoe) {
return {
    id,
    value,
    skill,
    yoe
};
}

const initialRows = [
    createData(1,'python', 'Python', 3),
    createData(2,'java', 'Java', 4),
    createData(3,'react', 'React', 2)
];

const getUncommonSkills = (rows) => {
    const rowsSkills = rows.map(row => row.skill);
    return allSkills.filter(skill => !rowsSkills.includes(skill.label));
};

const Skills = () => {

    const [tableValues, setTableValues] = useState(initialRows);
    const [aSkills, setASkills] = useState(getUncommonSkills(initialRows));
    const [open, setOpen] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const isMounted = React.useRef(false);

    const handleAllSkillChange = useCallback(() => {
        setASkills(getUncommonSkills(tableValues));
    }, [tableValues]);

    useEffect(() => {
      if (isMounted.current) {
        handleAllSkillChange();
        // console.log(tableValues);
        // console.log('Component re-rendered with values:', tableValues);
      } else {
        isMounted.current = true;
        // console.log('Component mounted with values:', tableValues);
      }
      }, [tableValues, handleAllSkillChange]);

    const handleAddSkill = (skill, yoe) => {
        if (skill && yoe !== null && yoe !== undefined) {
            const maxId = tableValues.length > 0 ? Math.max(...tableValues.map(row => parseInt(row.id))) : 0;
            const newId = maxId + 1;
            const newRow = createData(newId, skill, allSkills.find(s => s.value === skill)?.label || null, yoe);
            setTableValues([...tableValues, newRow]);
            // handleAllSkillChange();
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (value) => {
        const newTableValues = tableValues.filter((row) => row.value !== value);
        setTableValues(newTableValues);
        // handleAllSkillChange();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const paginatedRows = tableValues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <React.Fragment>
            <Grid container sx = {{backgroundColor: 'white', padding: '30px 30px 30px 30px', marginBottom: '5vh',
                                    display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'25px'}}>
                <Feature handleOpen={handleOpen} Title = "Skills" plus = {true}/>

                <TableContainer component={Paper} sx={{borderRadius: '25px'}}>
                    <Table sx={{ minWidth: 100 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Skills</TableCell>
                            <TableCell>Years of Experience</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {paginatedRows.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.skill}
                            </TableCell>
                            <TableCell>{row.yoe}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDelete(row.value)}><MdDeleteForever /></Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={tableValues.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        minwidth = {100}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>

            </Grid>
            <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                <Updateskills handleClose = {handleClose} skills={aSkills} handleAllSkillChange = {handleAllSkillChange} handleAddSkill = {handleAddSkill}/>
            </BootstrapDialog>
        </React.Fragment>

  )
}

export default Skills