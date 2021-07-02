import "./App.css";
import ClassInfo from "./components/ClassInfo";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Class from "./components/Class";

function App() {
  return (
    <div className="App">
      <h1>Dungeons & Dragons</h1>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/classes">
        <h3>Class-related Info</h3>
      </Link>
      <main>
        <Switch>
          <Route path="/class/:classID">
            <ClassInfo />
          </Route>
          <Route path="/classes">
            <Class />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
