import React, { useState, useEffect } from 'react';
import { Grid, Dialog, styled, Table, TableBody, TableContainer, TablePagination, TableCell, TableHead, Paper, TableRow, Button } from '@mui/material';
import { Feature, Updateskills } from '../../../components';
import { MdDeleteForever } from "react-icons/md";
import { dbUrl, getoptions } from '../../../utils/constants';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function createData(id, skill, yoe) {
    return {
        id,
        skill,
        yoe
    };
}

const Skills = () => {
    const [tableValues, setTableValues] = useState([]);
    const [open, setOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const isMounted = React.useRef(false);

    const createTableData = (response) => {
        if (response) {
            const newRows = response.map(element => {
                const { PK_SkillsID, SkillsName, SkillsNumYearsExperience } = element;
                return createData(PK_SkillsID, SkillsName, SkillsNumYearsExperience);
            });
            setTableValues(newRows);
        }
    };

    useEffect(() => {
        if (isMounted.current) {
            fetch(dbUrl + 'GetJobseekerSkillsByID?ID=1', getoptions)
                .then(data => data.json())
                .then(json => {
                    createTableData(json);
                })
                .catch(error => console.error(error));
        } else {
            isMounted.current = true;
        }
    }, [tableValues]);

    const handleAddSkill = async (skill, yoe, newId) => {
        const newRow = createData(newId, skill, yoe);
        setTableValues(prevValues => [...prevValues, newRow]);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        const newTableValues = tableValues.filter((row) => row.id !== id);
        setTableValues(newTableValues);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedRows = tableValues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <React.Fragment>
            <Grid container sx={{ backgroundColor: 'white', padding: '30px 30px 30px 30px', marginBottom: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
                <Feature handleOpen={handleOpen} Title="Skills" plus={true} />

                <TableContainer component={Paper} sx={{ borderRadius: '25px' }}>
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
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.skill}
                                    </TableCell>
                                    <TableCell>{row.yoe}</TableCell>
                                    <TableCell align="right"><Button onClick={() => handleDelete(row.id)}><MdDeleteForever /></Button></TableCell>
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
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Grid>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Updateskills handleClose={handleClose} handleAddSkill={handleAddSkill} />
            </BootstrapDialog>
        </React.Fragment>
    );
};

export default Skills;
