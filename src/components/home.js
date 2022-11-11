import React,{useContext, useEffect, useState} from "react";
import Card from "./card.js"

const Home=()=>{
  
   const [allres,setAllres]=useState([])
  // console.log("name",name,allData)
  // const [allData,setAllData]=useState([ ])
 console.log("allres",allres)
  const [selectedCardDetails,setSelectedCardDetails]=useState([])

useEffect(()=>{

getData()
},[])


const getData=()=>{

 fetch('https://randomuser.me/api/?results=50&nat=in')
.then((res)=>res.json())
.then((data)=>{
console.log(data.results,"response")
setAllres([...data.results])
  
})

  }

const selectedCard=(data)=>{
  debugger
  setSelectedCardDetails([data])
  console.log(selectedCardDetails)
}


const closePopUP=()=>{
  setSelectedCardDetails([])
}

  return(
    <div style={{    position: "relative"}}>
    <h3 style={{display:"flex",justifyContent:"end",alignItems:"center",paddingRight:"15px"}}>Garima Raghav (React Js)</h3>
    <h1 style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "underline",
    background: "#dede9a",
    border: "3px solid",
    height: "4rem"}}>Showing Random User's data using "https://randomuser.me/api/" </h1>
<Card allData={allres.slice(0,10)} selectedCard={selectedCard}/>    
<Card allData={allres.slice(10,20)} selectedCard={selectedCard} />   
<Card allData={allres.slice(20,30)} selectedCard={selectedCard} />   
<Card allData={allres.slice(30,40)} selectedCard={selectedCard} /> 
<Card allData={allres.slice(40,50)} selectedCard={selectedCard} />    

{selectedCardDetails.length>0 &&
<div style={{    position: "fixed",
    // top: "24%",
    // left: "32%",
    // backgroundColor: "rgb(102 140 173 / 98%)",
    // color: "aliceblue",
    top: "0.1%",
    left: "0.1%",
    backgroundColor: "rgb(70 80 89 / 65%)",
    color: "aliceblue",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
   }}> 
    <div style={{ height: "58vh",
    width: "42%",
    border: "3px solid black",
    backgroundColor: "rgb(102 140 173 / 98%)",
    boxShadow: "2px 2px 6px yellow"}} >
    <div style={{    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 16px",}}>
  <h1>Name : {selectedCardDetails[0].name.title}. {selectedCardDetails[0].name.first} {selectedCardDetails[0].name.last}    </h1>
  <button onClick={()=>{closePopUP()}}>&times;</button>
  </div>
  <div style={{    display: "flex",
    justifyContent: "space-evenly", alignItems: "center",}}>
    <div style={{height: "10rem",
    border: "2px solid black"}}>
      <img src={selectedCardDetails[0].picture.large} alt="ffsd" style={{height:"100%",
      width:"100%"}}/>
    </div>
    <div style={{    width: "343px"}}>
      <p>
      Gender : {selectedCardDetails[0].gender} 
      </p>
      <p>
           Age : {selectedCardDetails[0].dob.age}      DOB : {selectedCardDetails[0].dob.date}
         </p>
         <p>Address : {selectedCardDetails[0].location.street.number} {selectedCardDetails[0].location.street.name} , {selectedCardDetails[0].location.city} , {selectedCardDetails[0].location.state} </p>
       <p>Country : {selectedCardDetails[0].location.country}</p>
         <p className="emailText">&#9993; : {selectedCardDetails[0].email}</p>
       <p className="emailText" style={{fontSize:"13px"}}>&#128222; : {selectedCardDetails[0].phone}</p>
    
       </div> 
    </div>
    </div>
</div>}
    </div>
  )

}
export default Home;