import React from 'react';

import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";

const useStyles = makeStyles(theme => ({
    pageLink: {
        display: "inline-block",
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    dishesLink: {
        paddingRight: '50px',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbarInner: {
        justifyContent: "space-between"
    },
}));

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Grid container direction="row" className={classes.toolbarInner}>
                        <Grid item>
                            <Typography variant="h6" className={classes.pageLink}>
                                <Link to="/">Turtle Pizza Admin</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="subtitle1"
                                className={classes.pageLink + ' ' + classes.dishesLink}>
                                <Link to="/dishes">Dishes</Link>
                            </Typography>
                            <Typography variant="subtitle1" className={classes.pageLink}>
                                <Link to="/orders">Orders</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {children}
        </>
    );
};

export default Layout;