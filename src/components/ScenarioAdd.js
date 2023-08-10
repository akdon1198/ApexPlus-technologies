import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addscenario } from "../redux/ScenarioSlice";

function ScenarioAdd() {
  let homestyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "30px 100px",
  };
  const [scenarioname, setscenarioname] = useState("")
  const [scenariotime, setscenariotime] = useState("")
  const dispatch = useDispatch();
  function handleclick(){
    dispatch(addscenario({scenarioname, scenariotime}))
  }
  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={homestyle}>Scenario/add</div>
      <h1 style={homestyle}>Add Scenario</h1>
      <div
        style={{
          width: "60vw",
          height: "200px",
          backgroundColor: "rgb(30, 33, 33)",
          margin: "0px 100px",
          display:"flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{display:"flex", flexDirection:"column", margin:"30px 0px",}}>
          <strong style={{color:"white"}}>Scenario Name</strong>
          <input type="text" value={scenarioname} onChange={(e)=>setscenarioname(e.target.value)}></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 0px"}}>
          <strong style={{color:"white"}}>Scenario Time(seconds)</strong>
          <input type="number" value={scenariotime} onChange={(e) => setscenariotime(e.target.value)}></input>
        </div>
      </div>
      <div style={{ ...homestyle, display: "flex" }}>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="success" onClick={handleclick}>Add</MDBBtn>
        </div>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="warning">Reset</MDBBtn>
        </div>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="info">Go Back</MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default ScenarioAdd;
