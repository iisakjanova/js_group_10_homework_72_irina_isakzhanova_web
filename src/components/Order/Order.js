import React, {useEffect} from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";

import {getDishes} from "../../store/actions/dishesActions";
import {CURRENCY, DELIVERY_PRICE} from "../../constants";

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
    total: {
        width: "100%",
    },
}));


const Order = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes.dishes);

    useEffect(() => {
        (async () => {
            await dispatch(getDishes());
        })();
    }, [dispatch]);

    const order = props.data;

    const calculateTotal = order => {
        return Object.keys(order).reduce((acc, key) => {
            return acc + order[key] * dishes[key].price;
        }, 0);
    };

    const total = calculateTotal(order) + DELIVERY_PRICE;

    return (
        dishes
            ?
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container direction="row" className={classes.paperInner}>
                        <Grid container direction="row" className={classes.info}>
                            <Grid container direction="column">
                                {Object.keys(order).map(key => (
                                    <Grid key={key} container direction="row" className={classes.item}>
                                        <Typography variant="subtitle1" className={classes.itemPart}>
                                            {order[key]} X {dishes[key].title}
                                        </Typography>
                                        <Typography  variant="subtitle1" className={classes.itemPart}>
                                            {dishes[key].price} {CURRENCY}
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
                        <Grid container direction="column" xs={4}>
                            <Typography variant="subtitle1" className={classes.total}>
                                Order total:
                            </Typography>
                            <Typography variant="subtitle1" className={classes.total}>
                                {total} {CURRENCY}
                            </Typography>
                            <Button variant="outlined">Complete order</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            :
            null
    );
};

export default Order;