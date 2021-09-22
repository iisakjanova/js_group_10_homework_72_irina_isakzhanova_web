import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles'

import DishForm from "../DishForm/DishForm";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

const DishFormPage = ({match}) => {
    const classes = useStyles();
    const id = match.params.id;

    return (
        <Grid container direction="column" spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant="h5">{id ? 'Edit dish' : 'Add new dish'}</Typography>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <DishForm
                        id={id}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DishFormPage;