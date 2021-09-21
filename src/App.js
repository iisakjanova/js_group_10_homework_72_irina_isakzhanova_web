import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import DishFormPage from "./containers/DishFormPage/DishFormPage";
import {Route, Switch} from "react-router-dom";

const theme = createTheme();

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Switch>
              <Route path="/" exact render={() => <h1>Home</h1>}/>
              <Route path="/dishes/add" component={DishFormPage} />
              <Route render={() => <h1>Not found</h1>}/>
          </Switch>
      </ThemeProvider>
  );
};

export default App;
