import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./Routes/routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./Routes/RouteWithSubRoutes/RouteWithSubRoutes";
import NavbarComp from "./components/NavbarComp/NavbarComp";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
