import CardSup from "./component/CardSup";
import CardBat from "./component/CardBat";
import CardWomen from "./component/CardWomen";
import CardAqa from "./component/CardAqua";
import CardJustice from "./component/CardJustice";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Slidebar";
import { useEffect, useState } from "react";


function App() {


 


  return(
    <>

     <div className="card-container">
  



    <CardBat/>
    <CardSup/>
    <CardWomen/>
    <CardAqa/>
    <CardJustice/>
    <Navbar/>
    <Sidebar/>
     
    </div>


    </>
  );

  
}

export default App
