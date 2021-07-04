import "./App.css";
import ClassInfo from "./components/Classes/ClassInfo";
import { Route, Redirect, Switch } from "react-router-dom";
import Class from "./components/Classes/Class";
import Layout from "./components/MainPage/Layout";
import Home from "./components/MainPage/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/class/:classID">
              <ClassInfo />
            </Route>
            <Route path="/classes">
              <h1>
                Classes
              </h1>
              <Class />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </main>
    </div>
  );
}

export default App;
