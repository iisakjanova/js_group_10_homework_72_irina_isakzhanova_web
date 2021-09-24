import React, {useEffect} from 'react';
import {Backdrop, CircularProgress, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";

import {getOrders} from "../../store/actions/ordersActions";
import Order from "../../components/Order/Order";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        padding: theme.spacing(3),
    },
    title: {
        paddingBottom: theme.spacing(3),
    },
    button: {
        alignSelf: "center",
    },
}));

const Orders = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const loading = useSelector(state => state.orders.loading);

    useEffect(() => {
        (async () => {
            await dispatch(getOrders());
        })();
    }, [dispatch]);

    return (
        <>
            {loading
                ?
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                :
                orders
                    ?
                    <Grid container direction="column" className={classes.root}>
                        <Grid container direction="row">
                            <Typography variant="h5" className={classes.title}>
                                Orders
                            </Typography>
                        </Grid>
                        <Grid container direction="column">
                            {Object.keys(orders).map(key => (
                                <Order
                                    key={key}
                                    id={key}
                                    data={orders[key]}
                                />
                            ))}
                        </Grid>
                    </Grid>
                    :
                    null
            }
        </>
    );
};

export default Orders;