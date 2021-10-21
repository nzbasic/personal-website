import { Main } from "./components/pages/Main";
import { Projects } from './components/pages/Projects'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

const App = () => {

  const theme = React.useMemo(
    () => 
    createTheme({
      palette: {
        type: 'dark',
      }
    }), [])

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
