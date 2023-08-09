import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ScenarioAdd from "./components/ScenarioAdd"
import ScenarioShow from "./components/ScenarioShow"
import VehicleAdd from "./components/VehicleAdd"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
function App() {
  let styleobj = {
    display:"flex"
  }
  return (
  <div style={styleobj}>
   <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/addscenario"><ScenarioAdd/></Route>
      <Route path="/showscenario"><ScenarioShow/></Route>
      <Route path="/addvehicle"><VehicleAdd/></Route>
    </Switch>
   </Router>
  </div>
  );
}

export default App;
