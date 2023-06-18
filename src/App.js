import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AgeCalculator from "./AgeCalculator";
import NotFound from "./NotFound";
let App=()=> {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <AgeCalculator />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
