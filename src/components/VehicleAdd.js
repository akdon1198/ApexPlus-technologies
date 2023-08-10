import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addvehicle } from '../redux/ScenarioSlice';

function VehicleAdd() {
  let homestyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "30px 100px",
  };
  const ScenarioList = useSelector(state => state.scenario.ScenarioList)
  let firstScenarioname = ScenarioList[0]?.scenarioname ? ScenarioList[0].scenarioname : ""
  const [scenarioname, setscenarioname] = useState(firstScenarioname)
  const [vehiclename, setvehiclename] = useState("")
  const [speed, setspeed] = useState("")
  const [PositionX, setPositionX] = useState("")
  const [PositionY, setPositionY] = useState("")
  const [Direction, setDirection] = useState("Towards")
  const dispatch = useDispatch()
  function handleclick(){
    dispatch(addvehicle({scenarioname, vehiclename, speed, PositionX, PositionY, Direction}))
  }
  function handlechange(e){
    if(e.target.name == "Direction") setDirection(e.target.value)
    else setscenarioname(e.target.value)
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
          <select name="scenarioname"onChange={(e) => setscenarioname(e.target.value)}>
            <option disabled>Select Scenario</option>
            {
              ScenarioList && ScenarioList.map((Scenarioitem) => {
                return <option>{Scenarioitem.scenarioname}</option>
              })
            }
          </select>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Vehicle Name</strong>
          <input type="text" value={vehiclename} onChange={(e) => setvehiclename(e.target.value)}></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Speed</strong>
          <input type="number"value={speed} onChange={(e) => setspeed(e.target.value)}></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Position X</strong>
          <input type="number" value={PositionX} onChange={(e) => setPositionX(e.target.value)}></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Position Y</strong>
          <input type="number" value={PositionY} onChange={(e) => setPositionY(e.target.value)}></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"30px 60px"}}>
          <strong style={{color:"white"}}>Direction</strong>
          <select name="Direction" onChange={handlechange}>
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
  )
}

export default VehicleAdd