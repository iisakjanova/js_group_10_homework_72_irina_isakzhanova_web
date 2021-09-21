import React from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
        alignItems: "center",
    },
    image: {
        width: "150px",
        display: "block",
    },
    info: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    button: {
        marginLeft: "10px !important",
    },
    buttons: {
        marginLeft: "auto !important"
    },
}));

const Dish = (props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Grid container direction="row" className={classes.item}>
                <Grid item>
                    <img src={props.image} alt={props.title} className={classes.image} />
                </Grid>
                <Grid item className={classes.info}>
                    <Typography variant="subtitle1">{props.title}</Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Typography variant="h6">{props.price} KGS</Typography>
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button
                        variant="outlined"
                        onClick={props.onEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={props.onRemove}
                        className={classes.button}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Dish;