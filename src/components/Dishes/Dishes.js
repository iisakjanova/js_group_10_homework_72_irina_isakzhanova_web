import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, CircularProgress, Grid} from "@mui/material";
import {makeStyles} from '@mui/styles';

import Dish from "../../components/Dish/Dish";
import {getDishes, removeDish} from "../../store/actions/dishesActions";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        padding: theme.spacing(3),
    },
}));

const Dishes = ({history}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes.dishes);
    const loading = useSelector(state => state.dishes.loading);

    useEffect(() => {
        (async () => {
            await dispatch(getDishes());
        })();
    }, [dispatch]);

    const handleEdit = (id) => {
        history.push(`/dishes/edit/${id}`);
    };

    const handleRemove = async id => {
        await dispatch(removeDish(id))
        await dispatch(getDishes());
    };

    return (
        <>
            {loading
                ?
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                :
                dishes
                    ?
                    <Grid container direction="column" className={classes.root}>
                        {Object.keys(dishes).map(key => {
                            const title = dishes[key].title;
                            const price = Number(dishes[key].price);

                            return <Grid item key={key}>
                                <Dish
                                    id={key}
                                    title={title}
                                    price={price}
                                    image={dishes[key].image}
                                    onEdit={() => handleEdit(key)}
                                    onRemove={() => handleRemove(key)}
                                />
                            </Grid>
                        })}
                    </Grid>
                    :
                    null
            }
        </>
    );
};

export default Dishes;