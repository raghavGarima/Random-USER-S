import React from "react";
import './card.css'
import Slider from "react-slick";

const Card=({allData,selectedCard})=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay:true,
    swipe:true
  };
  console.log("allData",allData)
// const showData=(indexValue)=>{
//   let data={
//     type:"cardData",
//     action:indexValue
//   }
//   updateData(data)
// }


  return (
    <div className="CardComponentMainDiv">
 <Slider {...settings} className="ourSlider"> 
 {allData.length>0 && allData.map((data)=>{
   return(

    <div className="cardDiv">
          <p className="personName">{data.name.title}. {data.name.first} {data.name.last}</p>
     
     <div className="contentDiv">

   <div className="pictureDiv">
         <img src={data.picture.large} />
       </div>
       <div className="ageDiv">
         <p>
         Gender : {data.gender} 
         </p>
         <p>
           Age : {data.dob.age}
         </p>
       </div>
       <p className="emailText">&#9993; : {data.email}</p>
       <p className="emailText" style={{fontSize:"16px"}}>&#128222; : {data.phone}</p>
       </div> 
       <div className="knowMoreBtn">
       <button onClick={()=>selectedCard(data)}>Know more?</button>
       </div>
      
        </div>
   )
 })

 }
 </Slider>
 
      
      
    </div>
  );
}
export default Card