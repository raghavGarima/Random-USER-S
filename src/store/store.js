export const allState={
isLoading:true,
name:"Garima",
course:"btech",
allData:[],

}

// updateData:function changeState(data){
//   debugger
//   let qwer=allState.allData
//   a
// },

export const updateData=(data,state=allState)=>{
  switch(data.type){
    case "cardData":
      state.allData=[...state.allData,...data.payload]
      break;
    default :
     console.log(qwertyuio)
     return null;
  }
}
 






 