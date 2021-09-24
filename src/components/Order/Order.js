import React, {useEffect} from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";

import {getDishes} from "../../store/actions/dishesActions";
import {CURRENCY, DELIVERY_PRICE} from "../../constants";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "20px !important",
    },
    item: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    itemPart: {
        width: "30%",
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

    return (
        dishes
            ?
            <Grid item className={classes.root}>
                <Paper>
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
                </Paper>
            </Grid>

            :
            null

    );
};

export default Order;