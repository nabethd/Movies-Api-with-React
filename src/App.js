import Movies from "./Movies";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Reports from "./components/Repots";

const App = () => {
  const movies = new Movies();

  return (
    <Switch>
      <Route exact path="/">
        <Login movies={movies} />
      </Route>
      <Route path="/HomePage">
        <HomePage movies={movies} />
      </Route>
      <Route path="/Reports">
        <Reports movies={movies} />
      </Route>
    </Switch>
  );
};

export default App;
