import { Main } from "./components/pages/Main";
import { Projects } from './components/pages/Projects'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
