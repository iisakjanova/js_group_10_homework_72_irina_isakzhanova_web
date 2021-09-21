import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch} from "react-redux";

import {addDish} from "../../store/actions/dishesActions";

const initialState =  {
    title: '',
    price: '',
    image: '',
};

const DishForm = ({dishData}) => {
    const dispatch = useDispatch();

    const [dish, setDish] = useState(dishData || initialState);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setDish(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = async e => {
        e.preventDefault();
        await dispatch(addDish({...dish}));
        setDish(initialState);
    };

    return (
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
    );
};

export default DishForm;