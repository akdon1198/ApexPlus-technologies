import React, { useState } from "react";
import { Link, useLocation} from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const selectedstate = location.pathname.split("/")[1]
  const [colorstate, setcolorstate] = useState(selectedstate);
  let navstyle = {
    width: "20%",
    backgroundColor: "lightslategray",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  let componentstyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "30px",
    fontFamily: "sans-serif",
  };
  return (
    <div style={navstyle}>
      <div
        style={
          colorstate == "home"
            ? { margin: "10px", backgroundColor: "lightblue" }
            : { margin: "10px" }
        }
        onClick={() => setcolorstate("home")}
      >
        <Link style={componentstyle} to="/">
          Home
        </Link>
      </div>
      <div
        style={
          colorstate == "addscenario"
            ? { margin: "10px", backgroundColor: "lightblue" }
            : { margin: "10px" }
        }
        onClick={() => setcolorstate("addscenario")}
      >
        <Link style={componentstyle} to="/addscenario">
          Add Scenario
        </Link>
      </div>
      <div
        style={
          colorstate == "showscenario"
            ? { margin: "10px", backgroundColor: "lightblue" }
            : { margin: "10px" }
        }
        onClick={() => setcolorstate("showscenario")}
      >
        <Link style={componentstyle} to="/showscenario">
          All Scenario
        </Link>
      </div>
      <div
        style={
          colorstate == "addvehicle"
            ? { margin: "10px", backgroundColor: "lightblue" }
            : { margin: "10px" }
        }
        onClick={() => setcolorstate("addvehicle")}
      >
        <Link style={componentstyle} to="/addvehicle">
          Add Vehicle
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
