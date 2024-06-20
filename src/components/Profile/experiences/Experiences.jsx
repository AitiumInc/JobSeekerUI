import React, { useState, useEffect } from 'react';
import { Grid, Dialog, styled, Table, TableBody, TableContainer, TablePagination, 
    TableCell, TableHead, Paper, TableRow, Button } from '@mui/material';
import { Feature, Updateexperiences } from '../../../components';
import { MdDeleteForever } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function createData(id, role, description, startYear, endYear) {
  return { id, role, description, startYear, endYear };
}

const initialRows = [
  createData(1, 'Software Engineer', 'Developed web applications', 2018, 2021),
  createData(2, 'Project Manager', 'Managed software projects', 2016, 2020),
  createData(3, 'UI/UX Designer', 'Designed user interfaces', 2019, 2022),
  createData(4, 'Data Scientist', 'Performed data analysis', 2017, 2020),
  createData(5, 'Backend Developer', 'Worked on server-side logic', 2020, 2023)
];

const Experiences = () => {
    const [tableValues, setTableValues] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const isMounted = React.useRef(false);

    useEffect(() => {
      if (isMounted.current) {
        // console.log(tableValues);
        // console.log('Component re-rendered with values:', tableValues);
      } else {
        isMounted.current = true;
        // console.log('Component mounted with values:', tableValues);
      }
      }, [tableValues]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddExperience = (role, description, startYear, endYear) => {
      if (role && description && startYear !== null && startYear !== undefined && endYear !== null && endYear !== undefined) {
          const maxId = tableValues.length > 0 ? Math.max(...tableValues.map(row => parseInt(row.id))) : 0;
          const newId = maxId + 1;
          const newRow = createData(newId, role, description, startYear, endYear);
          setTableValues([...tableValues, newRow]);
      }
    }

    const handleDelete = (id) => {
        const newTableValues = tableValues.filter((row) => row.id !== id);
        setTableValues(newTableValues);
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
            <Grid container sx={{ backgroundColor: 'white', padding: '30px', marginBottom: '5vh',
                                  display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
                <Feature handleOpen={handleOpen} Title="Experiences" plus={true} />

                <TableContainer component={Paper} sx={{ borderRadius: '25px' }}>
                    <Table sx={{ minWidth: 100 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Role</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Years</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {paginatedRows.map((row) => (
                              <TableRow key={row.id}>
                                  <TableCell component="th" scope="row">{row.role}</TableCell>
                                  <TableCell>{row.description}</TableCell>
                                  <TableCell>{row.startYear} - {row.endYear}</TableCell>
                                  <TableCell align="right">
                                      <Button onClick={() => handleDelete(row.id)}><MdDeleteForever /></Button>
                                  </TableCell>
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
                        // minwidth = {100}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Grid>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Updateexperiences handleClose={handleClose} handleAddExperience={handleAddExperience} />
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default Experiences;
