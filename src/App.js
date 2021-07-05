import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Class from "./components/Classes/Class";
import ClassInfo from "./components/Classes/ClassInfo";
import Home from "./components/MainPage/Home";
import Layout from "./components/MainPage/Layout";
import Race from "./components/Races/Race";
import RaceInfo from "./components/Races/RaceInfo";
import Calculate from "./components/MainPage/Calculate";

function App() {
  return (
    <div className="App">
      <main>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/classes/:classID">
              <ClassInfo />
            </Route>
            <Route path="/classes">
              <h1>Classes</h1>
              <Class />
            </Route>
            <Route path="/races/:raceID">
              <RaceInfo />
            </Route>
            <Route path="/races">
              <h1>Races</h1>
              <Race />
            </Route>
            <Route path="/simulate">
              <h1>Create your Character</h1>
              <Calculate />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </main>
    </div>
  );
}

export default App;
