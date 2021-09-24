import React from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";

import {CURRENCY, DELIVERY_PRICE} from "../../constants";
import {removeOrder, removeOrderFromState} from "../../store/actions/ordersActions";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "20px !important",
    },
    paper: {
        padding: theme.spacing(1),
    },
    paperInner: {
        flexWrap: "nowrap !important",
    },
    info: {
       flexGrow: 1,
    },
    item: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    itemPart: {
        width: "50%",
    },
    totalBlock: {
        width: "35% !important",
    },
    total: {
        width: "100%",
    },
    button: {
        alignSelf: "flex-start",
    },
}));

const Order = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes.dishes);

    const order = props.data;

    const calculateTotal = order => {
        return Object.keys(order).reduce((acc, key) => {
            return acc + order[key] * (dishes[key]?.price ?? 0);
        }, 0);
    };

    const total = calculateTotal(order) + DELIVERY_PRICE;

    const handleCompleteOrder = async (id) => {
        dispatch(removeOrderFromState(id));
        await dispatch(removeOrder(id));
    };

    return (
        Object.keys(dishes).length > 0
            ?
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container direction="row" className={classes.paperInner}>
                        <Grid container direction="row" className={classes.info}>
                            <Grid container direction="column">
                                {Object.keys(order).map(key => (
                                    <Grid key={key} container direction="row" className={classes.item}>
                                        <Typography variant="subtitle1" className={classes.itemPart}>
                                            {order[key]} X {dishes[key]?.title}
                                        </Typography>
                                        <Typography  variant="subtitle1" className={classes.itemPart}>
                                            {dishes[key]?.price} {CURRENCY}
                                        </Typography>
                                    </Grid>
                                ))}
                                <Grid container direction="row" className={classes.item}>
                                    <Typography variant="subtitle1" className={classes.itemPart}>
                                        Delivery:
                                    </Typography>
                                    <Typography  variant="subtitle1" className={classes.itemPart}>
                                        {DELIVERY_PRICE} {CURRENCY}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" className={classes.totalBlock}>
                            <Typography variant="subtitle1" className={classes.total}>
                                Order total:
                            </Typography>
                            <Typography variant="subtitle1" className={classes.total}>
                                {total} {CURRENCY}
                            </Typography>
                            <Button
                                variant="outlined"
                                className={classes.button}
                                onClick={() => handleCompleteOrder(props.id)}
                            >
                                Complete order
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            :
            null
    );
};

export default Order;