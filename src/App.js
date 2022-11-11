import logo from './logo.svg';
import './App.css';
import React,{ useEffect,createContext } from 'react';
import {allState} from "./store/store"
import Home from "./components/home"
export const homeContext=createContext() 

function App() {
  console.log("allState",allState)
  
  return (
 
   <homeContext.Provider value={allState}>

<Home />
   </homeContext.Provider>
  

  );
}

export default App;
