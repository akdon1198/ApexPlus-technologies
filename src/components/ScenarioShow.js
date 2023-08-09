import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

function ScenarioShow() {
  return (
    <div style={{ width: "80%", backgroundColor: "black" }}>
      <div style={{ display: "flex" }}>
        <h1
          style={{
            color: "white",
            fontFamily: "sans-serif",
            margin: "30px 100px",
          }}
        >
          All Scenarios
        </h1>
        <div style={{ display: "flex",margin: "30px 100px", }}>
          <div style={{ margin: "0px 10px" }}>
            <MDBBtn color="info">New Scenario</MDBBtn>
          </div>
          <div style={{ margin: "0px 10px" }}>
            <MDBBtn color="success">Add vehicle</MDBBtn>
          </div>
          <div style={{ margin: "0px 10px" }}>
            <MDBBtn color="warning">Delete All</MDBBtn>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto auto",
          width: "80%",
          rowGap: "10px",
          margin: "10px 100px",
        }}
      >
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Scenario Id</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Scenario Name</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Scenario Time</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Number of Vehicle</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Add Vehicle</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Edit</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Delete</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
      </div>
    </div>
  );
}

export default ScenarioShow;
