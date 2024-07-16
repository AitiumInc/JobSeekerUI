import React, { useState, useEffect } from 'react';
import { Grid, Dialog, styled, Table, TableBody, TableContainer, TablePagination, 
    TableCell, TableHead, Paper, TableRow, Button } from '@mui/material';
import { Feature, Updateeducation } from '../../../components';
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}/${year}`;
};

function createData(id, educationName, highestDegree, startDate, endDate) {
    return {
        id,
        educationName,
        highestDegree,
        startDate,
        endDate
    };
}

const Education = () => {
    const [tableValues, setTableValues] = useState([]);
    const [open, setOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const processResponse = (response) => {
        return response.map(item => 
          createData(
            item.PK_EDID,
            item.EDInstitutionName,
            item.EDHighestDegree,
            formatDate(item.EDStartingDate),
            formatDate(item.EDEndingDate)
          )
        );
    };

    const fetchEducation = () => {
        fetch(`${dbUrl}GetJobseekerEducationByID?ID=1`, getoptions)
            .then(response => response.json())
            .then(json => {
                setTableValues(processResponse(json));
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchEducation();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddEducation = (educationName, highestDegree, startDate, endDate) => {
        if (educationName && highestDegree && startDate !== null && startDate !== undefined && endDate !== null && endDate !== undefined) {
            const maxId = tableValues.length > 0 ? Math.max(...tableValues.map(row => parseInt(row.id))) : 0;
            const newId = maxId + 1;
            const newRow = createData(newId, educationName, highestDegree, startDate, endDate);
            setTableValues(prevValues => [...prevValues, newRow]);
        }
        handleClose();
    }

    const handleSuccess = () => {
        fetchEducation()
    }

    const handleDelete = (id) => {
        console.log(id)
        fetch(`${dbUrl}DeleteJobseekerEducation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'PK_EDID': id}),
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                handleSuccess();
            }
        })
        .catch(error => console.error(error));

        handleClose();
        // const newTableValues = tableValues.filter((row) => row.id !== id);
        // setTableValues(newTableValues);
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
                <Feature handleOpen={handleOpen} Title="Education" plus={true} />

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <TableContainer component={Paper} sx={{ borderRadius: '25px' }}>
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Education Name</TableCell>
                                    <TableCell>Highest Degree</TableCell>
                                    <TableCell>Years</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                              {paginatedRows.map((row) => (
                                  <TableRow key={row.id}>
                                      <TableCell component="th" scope="row">{row.educationName}</TableCell>
                                      <TableCell>{row.highestDegree}</TableCell>
                                      <TableCell>{row.startDate} - {row.endDate}</TableCell>
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
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                )}
            </Grid>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Updateeducation handleClose={handleClose} handleAddEducation={handleAddEducation} />
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default Education;
