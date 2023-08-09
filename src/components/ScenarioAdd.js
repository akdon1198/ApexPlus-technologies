import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

function ScenarioAdd() {
  let homestyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "30px 100px",
  };
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
          <input></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 0px"}}>
          <strong style={{color:"white"}}>Scenario Time(seconds)</strong>
          <input></input>
        </div>
      </div>
      <div style={{ ...homestyle, display: "flex" }}>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="success">Add</MDBBtn>
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
