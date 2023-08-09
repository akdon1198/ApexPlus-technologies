import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'

function Home() {
  let homestyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "30px 100px",
  };
  return (
    <div style={{width:"80%", backgroundColor:"black"}}>
      <div style={{margin:"10px 100px", display:"flex", flexDirection:"column"}}>
      <strong style={{color:"white"}}>Scenario</strong>
      <select style={{height:"30px", width:"150px"}}>
        <option>Test Scenario</option>
        <option>My Scenario</option>
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
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>Test Scenario</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>2s</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black"}}>1</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>➕</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>✏️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
        <div style={{ backgroundColor:"grey", height: "30px", textAlign:"center", color:"black", cursor:"pointer"}}>🗑️</div>
      </div>
      <div style={{ ...homestyle, display: "flex", justifyContent:"flex-end"}}>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="success">Start Simulation</MDBBtn>
        </div>
        <div style={{ margin: "0px 10px" }}>
          <MDBBtn color="info">Stop Simulation</MDBBtn>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(15, 1fr)",
          width: "80%",
          margin: "10px 100px",
          background:"rgb(30, 33, 33)"
        }}
      >
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
        <div style={{border:"1px solid green",height:"50px", textAlign:"center"}}>1</div>
       </div>
    </div>
  )
}


export default Home