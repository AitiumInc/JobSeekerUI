import React, { useState, useEffect } from 'react';
import { Grid, Dialog, styled, Table, TableBody, TableContainer, TablePagination, 
    TableCell, TableHead, Paper, TableRow, Button } from '@mui/material';
import { Feature, Updatecertification } from '../../../components';
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
    if (!(date instanceof Date) || isNaN(date)){
        return "";
    }
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}/${year}`;
};

function createData(id, certificate, dateObtained, expirationDate) {
    return {
        id,
        certificate,
        dateObtained,
        expirationDate
    };
}

const Certification = () => {
    const [certifications, setCertifications] = useState([]);
    const [open, setOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCertifications();
    }, []);

    const processResponse = (response) => {
        return response.map(item => 
            createData(
                item.PK_ProfessionalCertificateID,
                item.ProfessionalCertificate,
                formatDate(item.ProfessionalCertificateDateObtained),
                formatDate(item.ProfessionalCertificateExpirationDate)
            )
        );
    };

    const fetchCertifications = () => {
        fetch(`${dbUrl}GetJobseekerCertificatesByID?ID=1`, getoptions)
            .then(response => response.json())
            .then(json => {
                setCertifications(processResponse(json));
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddCertification = (certificate, dateObtained, expirationDate) => {
        if (certificate && dateObtained && expirationDate) {
            // const maxId = certifications.length > 0 ? Math.max(...certifications.map(row => parseInt(row.id))) : 0;
            // const newId = maxId + 1;
            // const newCertification = createData(newId, certificate, formatDate(dateObtained), formatDate(expirationDate));
            // setCertifications(prevCertifications => [...prevCertifications, newCertification]);
            fetchCertifications()
        }
        handleClose();
    };

    const handleSuccess = () => {
        fetchCertifications()
    }

    const handleDelete = (id) => {
        console.log(id)
        fetch(`${dbUrl}DeleteJobseekerCertificate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'PK_ProfessionalCertificateID': id}),
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
    };

    const paginatedRows = certifications.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <React.Fragment>
            <Grid container sx={{ backgroundColor: 'white', padding: '30px', marginBottom: '5vh',
                                  display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
                <Feature handleOpen={handleOpen} Title="Certifications" plus={true} />

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <TableContainer component={Paper} sx={{ borderRadius: '25px' }}>
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Certificate</TableCell>
                                    <TableCell>Date Obtained</TableCell>
                                    <TableCell>Expiration Date</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedRows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">{row.certificate}</TableCell>
                                        <TableCell>{row.dateObtained}</TableCell>
                                        <TableCell>{row.expirationDate}</TableCell>
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
                            count={certifications.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                )}
            </Grid>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Updatecertification handleClose={handleClose} handleAddCertification={handleAddCertification} />
            </BootstrapDialog>
        </React.Fragment>
    );
};

export default Certification;
