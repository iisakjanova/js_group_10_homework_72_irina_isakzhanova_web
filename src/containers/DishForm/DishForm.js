import React, {useEffect, useState} from "react";
import {Backdrop, Button, CircularProgress, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@mui/styles";

import {addDish, editDish, getDishById} from "../../store/actions/dishesActions";

const initialState =  {
    title: '',
    price: '',
    image: '',
};

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const DishForm = ({id}) => {
    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch();
    const reduxDish = useSelector(state => state.dishes.dishes[id]);
    const loading = useSelector(state => state.dishes.loading);

    const [dish, setDish] = useState(reduxDish || initialState);

    useEffect(() => {
        (async () => {
            if (id) {
                await dispatch(getDishById(id));
            }
        })();
    }, [dispatch, id]);

    useEffect(() => {
        setDish(reduxDish || initialState)
    }, [reduxDish, reduxDish?.id, reduxDish?.price, reduxDish?.title]);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setDish(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = async e => {
        e.preventDefault();

        if (id) {
            await dispatch(editDish({...dish}, id));
        } else {
            await dispatch(addDish({...dish}));
        }

        history.goBack();
    };

    return (
        <>
            {loading
                ?
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                :
                <Grid container direction="column" spacing={2} component="form" onSubmit={handleFormSubmit}>
                    <Grid item>
                        <TextField
                            required
                            label="Title"
                            name="title"
                            value={dish.title}
                            onChange={handleInputChange}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            multiline
                            minRows={3}
                            label="Price"
                            name="price"
                            value={dish.price}
                            onChange={handleInputChange}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            multiline
                            minRows={3}
                            label="Image"
                            name="image"
                            value={dish.image}
                            onChange={handleInputChange}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default DishForm;