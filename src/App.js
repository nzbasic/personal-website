import Main from "./components/pages/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
