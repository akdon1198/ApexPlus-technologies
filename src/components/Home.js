import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Home() {
  let homestyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "30px 100px",
  };
  const ScenarioList = useSelector(state => state.scenario.ScenarioList)
  const Scenarioid = useSelector(state => state.scenario.Scenarioid)
  let firstScenarioname = ScenarioList[0]?.scenarioname
  const [scenarioname, setscenarioname] = useState(firstScenarioname);
  let vehicleList = ScenarioList && ScenarioList[Scenarioid[scenarioname]]?.vehicleList
  let sortedvehiclelist = vehicleList && [...vehicleList]
  // let scenariotime = ScenarioList[0]?.scenariotime
  const[scenariotime, setscenariotime] = useState(0)
  if(sortedvehiclelist){
    sortedvehiclelist.sort(
      (vehicleitem1, vehicleitem2) =>{
        return (
          (vehicleitem1.PositionX * 14 + vehicleitem1.PositionY) 
          -
          (vehicleitem2.PositionX * 14 + vehicleitem2.PositionY)
        )
      }
    )
  }
  const[vehicleList2, setvehicleList2] = useState(sortedvehiclelist)
  let vehicleindex = 0;
  useEffect(()=>{
    console.log("how are you");
    setTimeout(() => {
      
      let temp = vehicleList2?.map(vehicleitem => {
        if(vehicleitem.Direction === "downwards"){
          return ({...vehicleitem, PositionX : parseInt(vehicleitem.PositionX) + 1})
        }
        else if(vehicleitem.Direction === "upwards"){
          return ({...vehicleitem, PositionX : parseInt(vehicleitem.PositionX) - 1})
        }
        else if(vehicleitem.Direction === "Backwards"){
          return ({...vehicleitem, PositionY : parseInt(vehicleitem.PositionY) - 1})
        }
        else if(vehicleitem.Direction === "Towards"){
          return ({...vehicleitem, PositionY : parseInt(vehicleitem.PositionY) + 1})
        }  
      })
      if(scenariotime) {
        setvehicleList2(temp)
        setscenariotime(scenariotime - 1);
      }
    }, 500);
  },[vehicleList2])
  function handleclick(){
        let temp = vehicleList2.map(vehicleitem => {
          if(vehicleitem.Direction === "downwards"){
            return ({...vehicleitem, PositionX : parseInt(vehicleitem.PositionX) + 1})
          }
          else if(vehicleitem.Direction === "upwards"){
            return ({...vehicleitem, PositionX : parseInt(vehicleitem.PositionX) - 1})
          }
          else if(vehicleitem.Direction === "Backwards"){
            return ({...vehicleitem, PositionY : parseInt(vehicleitem.PositionY) - 1})
          }
          else if(vehicleitem.Direction === "Towards"){
            return ({...vehicleitem, PositionY : parseInt(vehicleitem.PositionY) + 1})
          }  
        })
        setvehicleList2(temp)
        // console.log(temp);  
    // console.log(ScenarioList[0]?.scenariotime);
    setscenariotime(ScenarioList[0]?.scenariotime - 1)
  }
  return (
    <div style={{width:"80%", backgroundColor:"black"}}>
      <div style={{margin:"10px 100px", display:"flex", flexDirection:"column"}}>
      <strong style={{color:"white"}}>Scenario</strong>
      <select style={{height:"30px", width:"150px"}} onChange={(e) => setscenarioname(e.target.value)}>
        {
          ScenarioList && ScenarioList.map((Scenarioitem) => {
            return <option>{Scenarioitem.scenarioname}</option>
          })
        }
      </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          width: "80%",
          rowGap: "10px",
          margin: "10px 100px",
        }}
      >
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Vehicle Id</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Vehicle Name</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Position X</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Position Y</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Speed</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Direction</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Edit</div>
        <div style={{ backgroundColor:"rgb(30, 33, 33)", height: "30px", textAlign:"center", color:"white"}}>Delete</div>
        {
          vehicleList && vehicleList.map((vehicleitem, index) => {
            return (
              <>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>{index + 1}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>{vehicleitem.vehiclename}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>{vehicleitem.PositionX}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>{vehicleitem.PositionY}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>{vehicleitem.speed}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>{vehicleitem.Direction}</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
              <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
              </>
            )
          })
        }
      </div>
      <div style={{ ...homestyle, display: "flex", justifyContent:"flex-end"}}>
        <div style={{ margin: "0px 10px" }} onClick={handleclick}>
          <MDBBtn color="success" >Start Simulation</MDBBtn>
        </div>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="info">Stop Simulation</MDBBtn>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(14, 1fr)",
          width: "80%",
          margin: "10px 100px",
          background:"rgb(30, 33, 33)"
        }}
      >
        {
          Array(84).fill("").map((e, index) => {
            let vehiclelistindex = vehicleList2 && (vehicleindex < vehicleList2?.length) && ((vehicleList2[vehicleindex]?.PositionX - 1) * 14 + (vehicleList2[vehicleindex]?.PositionY - 1))
            console.log(vehiclelistindex);
            // vehicleindex = index === vehiclelistindex ? vehicleindex + 1 : ""
            return(
              <div style={{border:"1px solid green",height:"50px", textAlign:"center" , color:"white"}}>{index === vehiclelistindex ? ++vehicleindex : ""}</div>
              )
            })
        }
       </div>
    </div>
  )
}


export default Home