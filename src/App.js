import "./App.css";
import ClassInfo from "./components/ClassInfo";
import { Route, Redirect, Switch } from "react-router-dom";
import Class from "./components/Class";
import Typography from "@material-ui/core/Typography";
import Layout from "./components/MainPage/Layout";
import Home from "./components/MainPage/Home"

function App() {
  return (
    <div className="App">
      <main>
        <Layout>
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route path="/class/:classID">
              <ClassInfo />
            </Route>
            <Route path="/classes">
              <Typography variant="h3">Classes</Typography>
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
