import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Route, Switch} from "react-router-dom";
import {CssBaseline} from "@mui/material";

import DishFormPage from "./containers/DishFormPage/DishFormPage";
import Dishes from "./containers/Dishes/Dishes";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

const theme = createTheme();

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
          <Switch>
              <Route path="/" exact component={Dishes} />
              <Route path="/dishes" exact component={Dishes} />
              <Route path="/dishes/add" component={DishFormPage} />
              <Route path="/dishes/edit/:id" component={DishFormPage} />
              <Route path="/orders" exact component={Orders} />
              <Route render={() => <h1>Not found</h1>} />
          </Switch>
      </ThemeProvider>
  );
};

export default App;
