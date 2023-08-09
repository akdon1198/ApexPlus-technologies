import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'

function VehicleAdd() {
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
      <div style={homestyle}>Vehicle/add</div>
      <h1 style={homestyle}>Add Vehicle</h1>
      <div
        style={{
          width: "70vw",
          height: "300px",
          backgroundColor: "rgb(30, 33, 33)",
          margin: "0px 100px",
          display:"flex",
          flexWrap:"wrap"
        }}
      >
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px",}}>
          <strong style={{color:"white"}}>Scenarios List</strong>
          <select>
            <option disabled>Select Scenario</option>
            <option>myScenario</option>
            <option>Another Scenario</option>
          </select>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Vehicle Name</strong>
          <input></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Speed</strong>
          <input></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Position X</strong>
          <input></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Position Y</strong>
          <input></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Direction</strong>
          <select>
            <option disabled>Select Direction</option>
            <option>Towards</option>
            <option>Backwards</option>
            <option>upwards</option>
            <option>downwards</option>
          </select>
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
  )
}

export default VehicleAdd